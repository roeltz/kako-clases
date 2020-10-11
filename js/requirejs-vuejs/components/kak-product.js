define([
	"text!./kak-product.html",
	"./kak-modal"
], (template) => {
	
	return {
		template,
		props: {
			product: Object
		},
		data: () => ({
			isBuying: false
		}),
		methods: {
			toggleBuyModal() {
				this.isBuying = !this.isBuying;
			}
		},
		created() {
			console.log("CREATED", this.product.name);
		},
		beforeDestroy() {
			console.log("DESTROYED", this.product.name);
		}
	};
});