import amqp from 'amqplib';
import { Socket } from 'socket.io';
const { v4: uuidv4 } = require("uuid");

const complexityEnum = ['Easy', 'Medium', 'Hard'];

const pairedQueues = {
  Easy: "EasyPaired",
  Medium: "MediumPaired",
  Hard: "HardPaired",
};


export async function connect() {
  const amqpServer = "amqp://localhost:5672";
  const connection = await amqp.connect(amqpServer);
  const channel = await connection.createChannel();
  await channel.assertQueue("match_Queue", { durable: true, messageTtl: 30000 });
  for (const complexity of complexityEnum) {
    const queueName = `${complexity}`;

    await channel.assertQueue(queueName, { durable: true, messageTtl: 30000 });
    console.log(`Queue created for ${complexity}`);
  }
  return channel;
}

export async function matchUsers(queueName: string, username: string, complexity: string) {
  try {
    const channel = await connect();
    channel.sendToQueue(complexity, Buffer.from(JSON.stringify({ username, complexity })));

    await channel.checkQueue(queueName).then(async (queue) => {
      if (queue.messageCount >= 2) {
        const pair = {
          username1: "",
          username2: "",
          ack1: false,
          ack2: false,
          complexity: complexity,
          room: uuidv4(),
        };
        if (queue.messageCount >= 2) {
          await channel.get(queueName).then((user1) => {
            if (user1 !== false) {
              channel.ack(user1);
              pair.username1 = user1.content.toString();
            }
          });

          await channel.get(queueName).then((user2) => {
            if (user2 !== false) {
              channel.ack(user2);
              pair.username2 = user2.content.toString();
            }
          });
          channel.sendToQueue(pairedQueues[complexity], Buffer.from(JSON.stringify(pair)));
          channel.close();
        }
        else {
          console.log("Looking for a match...")
        }
      }
    });

  } catch (err) {
    console.log(err)
  }
}

export async function requestMatch(socket: Socket, username: string, complexity: string) {
  const channel = await connect();
  let otherUser, room;
  const interval = setInterval(async () => {
    try {
      const consumer = await channel.consume(pairedQueues[complexity], (data) => {

        const pair = JSON.parse(data.content.toString())
        if (!pair) {
          if (username === pair.username1 && !pair.ack1) {
            pair.ark1 = true;
            otherUser = pair.username2;
            room = pair.room;
            channel.ack(data);
          } else if (!pair.ack2 && username === pair.username2) {
            pair.ack2 = true;
            otherUser = pair.username1;
            room = pair.room;
            channel.ack(data);
          }
          if (!(pair.ack1 && pair.ack2)) {
            channel.sendToQueue(pairedQueues[complexity], Buffer.from(JSON.stringify(pair)));
          }
          channel.close();
          
            if (otherUser != null) {
                clearInterval(interval);
                callback(null, {otherUser, room });
            };  
        }
      })

       
  } catch (err) {
      console.log(err)
      clearInterval(interval);
    }
  }, 500); // Check every 0.5 second

    // Add a setTimeout to handle no match found within 30 seconds
    setTimeout(() => {
      clearInterval(interval); // Stop checking after 30 seconds
      callback(null, { otherUser, room }); // Callback with null if no match found
    }, 30000);
    
    if (otherUser) {
      socket.to(username).emit('match', { userId: otherUser, room });
      socket.to(otherUser).emit('match', { username, room });
  }
  }


  function callback(error, result) {
    if (error) {
        console.error('Error:', error);
    } else {
        if (result.otherUser) {
            console.log('Match found:', result.otherUser, 'in room', result.room);
        } else {
            console.log('No match found within 30 seconds');
        }
    }
}


