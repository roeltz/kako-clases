define(() => {
	
	return {
		install(Vue) {
			Vue.prototype.$toTimecode = function toTimecode(seconds) {
				let m = (Math.floor(seconds / 60)).toString().padStart(2, "0");
				let s = (Math.round(seconds) % 60).toString().padStart(2, "0");
				return `${m}:${s}`;
			};
		}
	};
});