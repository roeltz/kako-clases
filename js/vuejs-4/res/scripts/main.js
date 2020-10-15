require([
	"loader",
	"vue",
	"vue-i18n",
	"vue-router"
], (loader, Vue, VueI18n, VueRouter) => {

	Vue.use(VueI18n);
	Vue.use(VueRouter);

	let m = loader("modules");
	let router = new VueRouter({
		routes: [
			{name: "home", path: "/", component: m("home/index")},
			{name: "contact", path: "/contact", component: m("contact/index")}
		]
	});

	let i18n = new VueI18n({
		locale: navigator.language,
		fallbackLocale: "es"
	});
	
	new Vue({
		router,
		i18n,
		el: "main",
		data() {
			return {
				
			};
		},
		methods: {
			setLocale(locale) {
				require([`json!lang/${locale}.json`], messages => {
					this.$i18n.setLocaleMessage(locale, messages);
					this.$i18n.locale = locale;
				}, err => {
					this.setLocale("es");
				});
			}
		},
		created() {
			this.setLocale(navigator.language);
		}
	});
});