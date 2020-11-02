require([
	"axios",
	"loader",
	"vue",
	"vue-router",
	"vue-util"
], (axios, loader, Vue, VueRouter, VueUtil) => {

	axios.defaults.baseURL = "http://clases.kakoto.org/twitter-pirata/api/";

	Vue.use(VueRouter);
	Vue.use(VueUtil);

	let m = loader("modules");
	let router = new VueRouter({
		routes: [
			{name: "home", path: "/", component: m("home/index")},
			{name: "signup", path: "/signup", component: m("users/signup")},
		]
	});
	
	new Vue({
		router,
		el: "main",
		data() {
			return {
				ready: false,
				user: null
			};
		},
		methods: {
			setUser(user) {
				this.user = user;
			}
		},
		async created() {
			let user = (await axios.get("users/me")).data;

			if (user) {
				this.setUser(user);
			}

			this.ready = true;
		}
	});
});