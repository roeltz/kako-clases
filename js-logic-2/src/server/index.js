const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const ChatServer = require("./ChatServer");
const config = require("../../config");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use("/", express.static(__dirname + "/../public"));

let chatServer = new ChatServer(io, config.chatServer);

server.listen(config.server.port);

console.log("Server started");