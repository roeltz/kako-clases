define([
	"vue",
	"text!./song-item.html"
], (Vue, html) => {

	return Vue.component("song-item", {
		template: html,
		props: ["song"],
		methods: {
			playSong() {
				this.$router.push({name: "song", params: {id: this.song.id, song: this.song}});
			}
		}
	});
});