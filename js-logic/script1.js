const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use("/", express.static("public"));

app.get("/status", (req, res) => {
	res.json({
		date: new Date(),
		code: "OK"
	});
});

let users = [];

io.on("connection", socket => {
	socket.on("login", (user) => {
		users.push(user);
		io.sockets.emit("chat-people", users);
		console.log("Usuario conectado:", user.nick);

		socket.on("chat-message", (data) => {
			data.user = user;
			io.sockets.emit("chat-message", data);
		});
	
		socket.on("disconnect", () => {
			users.splice(users.indexOf(user), 1);
			io.sockets.emit("chat-people", users);
			console.log("Usuario desconectado:", user.nick);
		});
	});
});

server.listen(8000);