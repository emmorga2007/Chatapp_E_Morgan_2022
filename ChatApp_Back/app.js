import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';

const app = express();
const httpServer = createServer(app);

// use this library to set up your chat infastructure

//connect socket
const io = new Server(httpServer, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"]
    }
});

//use a dynamically generated port, or if one doesn't exist use the port 3000
const port = process.env.PORT || 3000; 

//tell the server to listen for incoming connections
httpServer.listen(port, () => {
    console.log(`chat server up and running on ${port}`);
})

// the socket.io stuff will go here - manage incoming connections, sending notifications, managing users, and managing chat messages. 

io.on('connection', (socket) => {
    console.log('a user is connected!');

    socket.emit('CONNECTED', socket.id);

    socket.on('SEND_MESSAGE', function(data) {
        console.log('SEND_MESSAGE event!', data);

        io.emit('MESSAGE', data);
    })
})