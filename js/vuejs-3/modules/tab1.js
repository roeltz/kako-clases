define([
	"text!./tab1.html"
], (html) => {

	return {
		template: html,
		data: () => ({
			info: null
		}),
		methods: {
			
		},
		created() {
			setTimeout(() => {
				this.info = "42";
			}, 3000);
		}
	};
});