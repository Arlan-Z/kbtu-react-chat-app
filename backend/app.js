import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: { origin: "*" }
});

let messages = [];

io.on("connection", (socket) => {

    socket.emit("initMessages", messages);

    socket.on("sendMessage", (msg) => {
        messages.push(msg);
        io.emit("newMessage", msg);
    });

    socket.on("disconnect", () => {
        console.log("🔴 Пользователь отключился:", socket.id);
    });
});

httpServer.listen(5000, () => console.log("Server running on http://localhost:5000"));
