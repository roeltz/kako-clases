define([
	"text!./index.html"
], (html) => {

	return {
		template: html,
		methods: {
			submit() {
				alert(this.$t("contact.error"));
			}
		}
	};
});