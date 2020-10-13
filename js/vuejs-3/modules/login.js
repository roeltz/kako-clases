define([
	"text!./login.html"
], (html) => {

	return {
		template: html,
		methods: {
			login() {
				this.$root.acceptLoginUser({
					name: "Old",
					email: "old@gmail.com"
				});
				this.$router.replace({name: "home"});
			}	
		}
	};
});