define([
	"axios",
	"text!./index.html",
	"components/artist-item"
], (axios, html) => {

	return {
		template: html,
		data() {
			return {
				artists: null
			};
		},
		methods: {
			
		},
		async created() {
			try {
				this.artists = (await axios.get("res/music/data/artists.json")).data;
			} catch (err) {

			}
		}
	};
});