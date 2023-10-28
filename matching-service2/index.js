import http from "http";
import { connect } from "./src/rabbitmq/rabbitmqService"
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json("application/json"));

const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:8087",
  }
});

const PORT = process.env.PORT || 8081;
server.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
  });

connect().then((channel) => {
    setupSockets(io, channel);
    setInterval(async () => {
      processQueues(channel);
    }, 5000)
  });



