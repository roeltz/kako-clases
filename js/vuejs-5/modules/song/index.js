define([
	"axios",
	"text!./index.html"
], (axios, html) => {

	return {
		template: html,
		props: ["id", "song"],
		data: () => ({
			currentTime: 0,
			duration: 0
		}),
		computed: {
			currentTimePercent() {
				return (this.currentTime / this.duration) * 100;
			}
		},
		methods: {
			togglePlay() {
				if (this._audio.paused) {
					this._audio.play();
				} else {
					this._audio.pause();
				}
			},
			toTimecode(seconds) {
				let m = (Math.floor(seconds / 60)).toString().padStart(2, "0");
				let s = (Math.round(seconds) % 60).toString().padStart(2, "0");
				return `${m}:${s}`;
			}
		},
		async created() {
			if (!this.song) {
				this.song = (await axios.get(`res/music/data/song-${this.id}.json`)).data;
			}

			this._audio = new Audio(this.song.file);
			this._audio.addEventListener("durationchange", e => this.duration = this._audio.duration);
			this._audio.addEventListener("timeupdate", e => this.currentTime = this._audio.currentTime);
		}
	};
});