define([
	"text!./kak-loader.html"
], (html) => {

	return {
		template: html,
		props: {
			promise: Promise
		},
		data: () => ({
			loading: true,
			error: false
		}),
		created() {
			this.promise.then(() => {
				this.loading = false;
			});
			this.promise.catch(err => {
				this.loading = false;
				this.error = err;
			});
		}
	};
});