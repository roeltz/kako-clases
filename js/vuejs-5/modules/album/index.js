define([
	"axios",
	"text!./index.html",
	"components/song-item"
], (axios, html) => {

	return {
		template: html,
		props: ["id", "album"],
		data: () => ({
			songs: null
		}),
		methods: {
			
		},
		created() {
			if (!this.album) {
				axios.get(`res/music/data/album-${this.id}.json`).then(r => this.album = r.data);
			}
			
			axios.get(`res/music/data/album-${this.id}-songs.json`).then(r => this.songs = r.data);
		}
	};
});