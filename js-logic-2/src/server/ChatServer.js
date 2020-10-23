const ChatSession = require("./ChatSession");

class ChatServer {

	constructor(io, config) {
		this.io = io;
		this.config = config;
		this.sessions = [];
		this.init();
		console.log("ChatServer started");
	}

	broadcast(event, data) {
		this.io.sockets.emit(event, data);
	}

	getPeopleList() {
		return this.sessions.map(s => s.getUserInfo());
	}

	init() {
		this.io.on("connection", socket => this.processSocket(socket));
	}

	processSocket(socket) {
		socket.on("login", user => {
			let session = new ChatSession(this, socket, user);
			this.processSession(session);
		});
	}

	processSession(session) {
		session.on("close", () => {
			this.sessions.splice(this.sessions.indexOf(session), 1);
			this.updatePeople();	
		});

		this.sessions.push(session);
		this.updatePeople();
	}

	updatePeople() {
		let people = this.getPeopleList();
		this.sessions.forEach(s => s.updatePeople(people));
	}
}

module.exports = ChatServer;