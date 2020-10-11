require([
	"axios",
	"vue",
	"util"
], (axios, Vue, util) => {

	new Vue({
		el: "main",
		data: () => ({
			msg: "Hola Mundo"
		}),
		methods: {
			doCLick() {
				util.alertFancy("Hey!");
			}
		}
	})
});