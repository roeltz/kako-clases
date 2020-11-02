define([
	"axios",
	"text!./signup.html"
], (axios, html) => {

	return {
		template: html,
		data: () => ({
			user: {},
			password2: null,
			error: null
		}),
		methods: {
			async requestSignup() {
				try {
					let user = (await axios.post("users", this.user)).data;
					this.$root.setUser(user);
					this.$router.replace({name: "home"});
				} catch (err) {
					if (err.response.data && err.response.data.message) {
						this.error = err.response.data.message;
					} else {
						this.error = "Error al registrarte. Intenta de nuevo";
					}
				}
			}
		}
	};
});