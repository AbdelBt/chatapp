const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require("socket.io")


app.use(cors());



const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "https://vocal-bublanina-a2315e.netlify.app",
        methods: ["GET", "POST"],
    },
});


io.on("connection", (socket) => {
    console.log(`user Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.on("join_room", (data) => {
            socket.join(data)
            console.log(`User with ID: ${socket.id} joined room: ${data}`);
        });
        socket.on("send_message", (data) => {
            socket.on("send_message", (data) => {
                console.log(data)
                socket.to(data.room).emit("receive_message", data);
            });

            socket.on("disconnect", () => {
                socket.on("disconnect", () => {
                    console.log("User Disconnected", socket.id)
                });
            });

            app.get('/', (req, res) => {
                res.send('backend');
            });
        });
        server.listen(3001, () => {
            console.log("SERVER RUNNING");
        })
    })
})