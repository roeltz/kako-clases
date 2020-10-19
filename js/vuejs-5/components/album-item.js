define([
	"vue",
	"text!./album-item.html"
], (Vue, html) => {

	return Vue.component("album-item", {
		template: html,
		props: ["album"],
		methods: {
			openAlbum() {
				this.$router.push({name: "album", params: {id: this.album.id, album: this.album}});
			}
		}
	});
});