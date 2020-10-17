define([
	"vue",
	"text!./album-item.html"
], (Vue, html) => {

	return Vue.component("album-item", {
		template: html,
		props: ["album"],
		methods: {
			
		}
	});
});