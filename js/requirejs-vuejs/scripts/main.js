require([
	"axios",
	"vue",
	"components/kak-loader",
	"components/kak-product"
], (axios, Vue, KakLoader, KakProduct) => {

	Vue.config.devtools = true;
	
	new Vue({
		el: "main",
		data() {
			return {
				loading: true,
				error: false,
				products: null,
				productRequest: axios.get("data/products.php"),
				offers: null,
				offerRequest: axios.get("data/offers.json")
			};
		},
		created() {
			this.productRequest.then(r => this.products = r.data);
			this.offerRequest.then(r => this.offers = r.data);
		},
		components: {
			KakLoader,
			KakProduct,
		}
	});
});