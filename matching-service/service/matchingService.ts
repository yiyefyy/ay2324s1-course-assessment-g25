import io from 'socket.io-client';
const socket = io('http://localhost:8081');
const { v4: uuidv4 } = require("uuid");
const BASE_URL = 'http://localhost:8081/match'

interface UserEntry {
  username: string;
  complexity: string
}
const queue: UserEntry[] = [];
const intervalMap = new Map();

function roomId() {
  return "room" + uuidv4();
}

const findMatch = async (username, complexity) => {
  const interval = setInterval(async () => {
    try {
      const otherUser = queue.find((userEntry) => userEntry.complexity === complexity && userEntry.username !== username);
      if (otherUser) {
        const room = roomId();
        await addPair(username, otherUser.username, complexity, room);
        const username2 = otherUser.username;
        socket.emit('create-session', { username, username2, complexity, room })
        socket.emit('match-found', { username1: username, username2: otherUser.username, complexity, room });
      } else {
        queue.push({ username, complexity })
        console.log("waiting for a match")
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
    socket.emit('match-timeout', { username, complexity });
    intervalMap.delete(username);
    socket.disconnect()
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
    socket.disconnect()
  }
}
async function fetchData(api: string, requestOptions = {}): Promise<any> {
  const response = await fetch(api, requestOptions)
  const results = await response.json()
  if (!response.ok) {
    throw new Error(results.error)
  }
  return results.res
}

async function addPair(username1: string, username2: string, complexity: string, roomId: string): Promise<void> {
  const requestOptions = {
    method: "POST",
  };
  const api = `${BASE_URL}`
  return fetchData(api, requestOptions)
}

module.exports = {
  cancelMatch,
  findMatch
}






