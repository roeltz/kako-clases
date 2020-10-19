require([
	"loader",
	"vue",
	"vue-router",
	"vue-util"
], (loader, Vue, VueRouter, VueUtil) => {

	Vue.use(VueRouter);
	Vue.use(VueUtil);

	let m = loader("modules");
	let router = new VueRouter({
		routes: [
			{name: "home", path: "/", component: m("home/index")},
			{name: "album", path: "/album/:id", component: m("album/index"), props: true},
			{name: "artist", path: "/artist/:id", component: m("artist/index"), props: true},
			{name: "song", path: "/song/:id", component: m("song/index"), props: true},
		]
	});
	
	new Vue({
		router,
		el: "main",
		data() {
			return {
				displayLogo: true
			};
		},
		methods: {
			goBack() {
				history.back();
			},
			toggleMenu() {

			},
			setLogo(display) {
				this.displayLogo = display;
			}
		}
	});
});