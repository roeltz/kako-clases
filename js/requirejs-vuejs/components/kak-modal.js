define([
	"vue",
	"text!./kak-modal.html"
], (Vue, html) => {

	return Vue.component("kak-modal", {
		template: html,
		props: [],
		methods: {
			close() {
				this.$emit("close");
			}
		}
	});
});