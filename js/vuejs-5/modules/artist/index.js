define([
	"axios",
	"text!./index.html",
	"components/album-item",
	"components/song-item"
], (axios, html) => {

	return {
		template: html,
		props: ["id", "artist"],
		data() {
			return {
				popularSongs: null,
				albums: null
			};
		},
		methods: {
			
		},
		async created() {
			if (!this.artist) {
				this.artist = (await axios.get(`res/music/data/artist-${this.id}.json`)).data;
			}

			this.popularSongs = (await axios.get(`res/music/data/artist-${this.artist.id}-popular-songs.json`)).data;
			this.albums = (await axios.get(`res/music/data/artist-${this.artist.id}-albums.json`)).data;
		}
	};
});