define([
	"text!./index.html"
], (html) => {
	
	return {
		template: html,
		data() {
			return {
				user: {
					name: "Ambar",
					age: 22,
					address: "Facatatisdndfbmdfsdhdjfsvá"
				}
			};
		},
	};
});
