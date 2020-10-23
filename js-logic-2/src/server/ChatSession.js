const {EventEmitter} = require("events");

class ChatSession extends EventEmitter {

	constructor(server, socket, user) {
		super();
		this.server = server;
		this.socket = socket;
		this.user = user;
		this.init();
		console.log("Usuario conectado:", this.user.nick);
	}

	close() {
		this.emit("close");
		console.log("Usuario desconectado:", this.user.nick);
	}

	getUserInfo() {
		return {
			nick: this.user.nick
		};
	}

	init() {
		this.socket.on("chat-message", data => this.processMessage(data));
		this.socket.on("disconnect", () => this.close());
	}

	processMessage(data) {
		data.user = this.getUserInfo();
		this.server.broadcast("chat-message", data);
	}

	updatePeople(people) {
		this.socket.emit("chat-people", people);
	}
}

module.exports = ChatSession;