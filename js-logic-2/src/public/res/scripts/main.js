require([
	"socketio",
	"vue"
], (io, Vue) => {

	new Vue({
		el: "main",
		data: () => ({
			mode: "login",
			user: {
				nick: null
			},
			chatMessage: {
				text: null
			},
			people: [],
			history: [],
			error: false,
		}),
		methods: {
			login() {
				this.socket = io();
				this.socket.emit("login", this.user);

				this.socket.on("chat-message", data => this.processMessage(data));
				this.socket.on("chat-people", people => this.processPeople(people));
				this.socket.on("connect_error", () => {
					this.error = "El servidor está caído. Intenta nuevamente.";
					this.socket.disconnect();
				});
				this.socket.on("disconnect", () => {
					this.reset();
					this.error = "El servidor se cayó. Inicia sesión nuevamente.";
					this.socket.disconnect();
				});
				this.socket.once("connect", () => {
					this.mode = "chat";
				});
			},
			logout() {
				this.socket.disconnect();
				this.error = "Hasta pronto!";
			},
			processMessage(data) {
				if (this.history.length && this.history[this.history.length - 1].user.nick === data.user.nick) {
					data.isFromSameUser = true;
				}

				this.history.push(data);
				this.$nextTick(() => {
					this.$refs.history.scroll({
						top: this.$refs.history.scrollHeight
					});
				});
			},
			processPeople(people) {
				this.people = people;
			},
			reset() {
				this.user.nick = null;
				this.chatMessage.text = null;
				this.mode = "login";
				this.history = [];
				this.people = [];
			},
			sendMessage() {
				this.socket.emit("chat-message", this.chatMessage);
				this.chatMessage.text = null;
			}
		}
	});
});