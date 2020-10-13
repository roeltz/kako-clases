define([
	"text!./contact.html"
], (html) => {
	
	return {
		template: html,
		data() {
			return {
				email: null
			};
		},
		methods: {
			send() {
				setTimeout(() => {
					this.$router.replace({name: 'home'});
				}, 2000);
			}
		}
	};
});