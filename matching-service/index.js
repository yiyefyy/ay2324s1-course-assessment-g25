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
const {errorHandler} = require("./middleware/errorHandler");
app.use(errorHandler);

const PORT = process.env.PORT || 8088;

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  }
});
//for collab-service
/* io.on('connection', (socket) => {
  console.log('Client connected to the livestock service');

  // Handle real-time communication
  socket.on('livestockUpdate', (data) => {
    // Broadcast updates to all clients
    io.emit('livestockUpdated', data);
  });
});

app.get('/livestock', (req, res) => {
  res.json(livestockData);
}); */

/* const socketIoClient = require('socket.io-client');

// Connect to the shared Socket.IO server in the Livestock Microservice
const livestockSocket = socketIoClient('http://localhost:3001');

livestockSocket.on('livestockUpdated', (data) => {
  console.log('Livestock data updated:', data);
});
 */

const socket = io.on('connection', (socket) => {
  console.log('User is connected');

  socket.on('find-match', ({ username, complexity }) => {
    findMatch(username, complexity); 
  });
  socket.on('cancel-match', (username) => {
    cancelMatch(username);
  });
  socket.on('match-timeout', ({ username, complexity }) => {
    console.log(`${username} has timed out from matching for ${complexity} question.`);
    socket.disconnect();
  });
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const localIPAddress = '0.0.0.0'
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

const findMatch = async (username, complexity) => {
  console.log(queue);
  let interval;
  interval = setInterval(async () => {
    try {
      const otherUser = queue.find((userEntry) => userEntry.complexity === complexity  && userEntry.username !== username );
      if (otherUser != null) {
        const room = roomId();
        socket.emit('match-found', { username1: username, username2: otherUser.username, complexity, room });
        console.log('you have been matched with ${otherUser.username}');
        await addPair(username, otherUser.username, complexity, room);
        clearInterval(interval);
        connected = true;
      } else {
        queue.push({ username, complexity })
        console.log("waiting for a match")
        //console.log(queue)
      }
    } catch (err) {
      console.log(err)
    }
  }, 500);
  intervalMap.set(username, interval);
  setTimeout(() => {
    clearInterval(interval);
    const id = queue.findIndex(
      (entry) => entry.username === username
    );
    if (id != -1) {
      return queue.splice(id, 1);
    }
    console.log("timeout!")
    socket.emit('match-timeout', { username, complexity });
    intervalMap.delete(username);
    //socket.disconnect()
  }, 30000);
}

const cancelMatch = (username) => {
  if (intervalMap.has(username)) {
    clearInterval(intervalMap.get(username));
    intervalMap.delete(username);
    const index = queue.findIndex((userEntry) => userEntry.username === username);
    if (index !== -1) {
      queue.splice(index, 1);
      console.log(`${username} canceled the match`);
    }
    //socket.disconnect()
  }
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
