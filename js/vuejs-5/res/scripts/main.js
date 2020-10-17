require([
	"loader",
	"vue",
	"vue-router"
], (loader, Vue, VueRouter) => {

	Vue.use(VueRouter);

	let m = loader("modules");
	let router = new VueRouter({
		routes: [
			{name: "home", path: "/", component: m("home/index")},
			{name: "artist", path: "/artist/:id", component: m("artist/index"), props: true},
			{name: "song", path: "/song/:id", component: m("song/index"), props: true},
		]
	});
	
	new Vue({
		router,
		el: "main",
		data() {
			return {
				
			};
		},
		methods: {
			goBack() {

			},
			toggleMenu() {

			}
		}
	});
});