define([
	"vue",
	"text!./artist-item.html"
], (Vue, html) => {

	return Vue.component("artist-item", {
		template: html,
		props: ["artist"],
		methods: {
			openArtist() {
				this.$router.push({name: "artist", params: {id: this.artist.id, artist: this.artist}});
			}
		}
	});
});