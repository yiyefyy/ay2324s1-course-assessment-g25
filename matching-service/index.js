//const { findMatch, cancelMatch } = require('./service/matchingService');
const express = require("express");
const app = express();
const cors = require("cors");
const http = require('http');
const { Server } = require('socket.io');
const { v4: uuidv4 } = require("uuid");
const { Pair } = require('./models');

app.use(express.json());
app.use(cors());

const db = require("./models");

const matchRouter = require("./routes/matchRouter");
app.use("/match", matchRouter);
const { errorHandler } = require("./middleware/errorHandler");
app.use(errorHandler);

const PORT = process.env.PORT || 8081;

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  }
});

const socket = io.on('connection', (socket) => {
  //console.log('User is connected');

  socket.on('find-match', ({ username, complexity }) => {
    findMatch(username, complexity);
  });
  socket.on('cancel-match', (username) => {
    cancelMatch(username);
    socket.disconnect();
  });
  socket.on('match-timeout', ({ username, complexity }) => {
    console.log(`${username} has timed out from matching for ${complexity} question.`);
    socket.disconnect();
  });
  socket.on('disconnect', () => {
    //console.log('A user disconnected');
  });
  socket.on('join-room', ({room}) => {
    socket.join(room)
    console.log("joined room: " + room)
  })
  socket.on('message', ({room, message}) => {
    endSession(room, message)
  })

});

db.sequelize.sync().then(() => {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

//const socket = io('http://localhost:8081');

/* interface UserEntry {
  username: string;
  complexity: string
} */
const queue = [];
const intervalMap = new Map();

function roomId() {
  return "room" + uuidv4();
}

var connected = false;
var pushed = false;

const endSession = async (room, message) => {
  console.log("send message " + room)
  socket.to(room).emit('end-session', {message})
}

const findMatch = async (username, complexity) => {
  console.log(queue);
  let interval;
  interval = setInterval(async () => {
    try {
      const otherUser = queue.find((userEntry) => userEntry.complexity === complexity && userEntry.username !== username);
      if (otherUser != null) {
        console.log(queue);
        const room = roomId();

        // make a POST request to create a new room using the room id
        /* const response = await fetch(`http://localhost:3001/api/v1/rooms`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "id": room,
            "defaultAccesses": ["room:write"],
            "metadata": { "color": "blue" }
          }),
        }) */
        //console.log(await response.json())

        socket.emit('match-found', { username1: username, username2: otherUser.username, complexity, room });
        console.log(`you have been matched with ${otherUser.username}`);
        await addPair(username, otherUser.username, complexity, room);
        clearInterval(interval);
        const otherId = queue.findIndex(
          (entry) => entry.username === otherUser.username
        );
        if (otherId != -1) {
          return queue.splice(otherId, 1);
        }
        const myId = queue.findIndex(
          (entry) => entry.username === username
        );
        if (myId != -1) {
          return queue.splice(myId, 1);
        }
        connected = true;
      } else if (!pushed) {
        pushed = true;
        queue.push({ username, complexity })
        console.log(queue)
        console.log("waiting for a match")
        //console.log(queue)
      }
    } catch (err) {
      console.log(err)
    }
  }, 1500);
  intervalMap.set(username, interval);
  setTimeout(async () => {
    pushed = false;
    clearInterval(interval);
    const id = queue.findIndex(
      (entry) => entry.username === username
    );
    if (id != -1) {
      return queue.splice(id, 1);
    }
    console.log("timeout!")
    socket.emit('match-timeout', { username, complexity });
    console.log(queue)
    intervalMap.delete(username);
  }, 30000);
}

const cancelMatch = async (username) => {
  const nameValue = JSON.stringify(username)
  const parsedData = JSON.parse(nameValue);
  const name = parsedData.username;
  console.log("cancel " + name);
  pushed = false;
  clearInterval(intervalMap.get(name));
  intervalMap.delete(name);
  const index = queue.findIndex((userEntry) => userEntry.username === name);
  if (index != -1) {
    queue.splice(index, 1);
  }
  console.log(queue)
}

async function addPair(username1, username2, complexity, roomId) {
  try {
    const pair = await Pair.create({
      username1: username1,
      username2: username2,
      complexity: complexity,
      isDone: false,
      roomId: roomId
      //question: qn_id,
    });
    return pair;
  } catch (err) {
    console.log(err)
  }
}
