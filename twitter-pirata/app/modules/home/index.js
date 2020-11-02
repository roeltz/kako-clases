define([
	"axios",
	"dayjs",
	"text!./index.html"
], (axios, dayjs, html) => {

	return {
		template: html,
		data: () => ({
			draft: {},
			tweets: [],
			loading: false,
			atEOL: false,
			lastEditedTweet: null
		}),
		methods: {
			formatCreationDate(date) {
				return dayjs(date).format("DD [de] MMMM [de] YYYY, [a las] hh:mm a");
			},
			async loadTweets() {
				this.tweets = (await axios.get("tweets")).data;
			},
			async loadRecentTweets() {
				let tweets = (await axios.get("tweets", {
					params: {
						afterId: this.tweets[0].id
					}
				})).data;

				if (tweets.length) {
					this.tweets.unshift(...tweets);
				}
			},
			async loadMoreTweets() {
				let tweets = (await axios.get("tweets", {
					params: {
						beforeId: this.tweets[this.tweets.length - 1].id
					}
				})).data;

				if (tweets.length) {
					this.tweets.push(...tweets);
				} else {
					this.atEOL = true;
				}
			},
			async publish() {
				this.loading = true;
				
				if (this.draft.id) {
					await axios.put(`tweets/${this.draft.id}`, this.draft);
					this.lastEditedTweet.content = this.draft.content;
					this.lastEditedTweet = null;
				} else {
					await axios.post("tweets", this.draft);
					this.loadRecentTweets();
				}

				this.draft = {};
				this.loading = false;
			},
			async deleteTweet(tweet) {
				if (confirm("¿Estás seguro?")) {
					try {
						await axios.delete(`tweets/${tweet.id}`);
						this.tweets.splice(this.tweets.indexOf(tweet), 1);
					} catch (err) {
						alert("No pudo borrar el tweet");
					}
				}
			},
			isMine(tweet) {
				return tweet.user.id === this.$root.user.id;
			},
			startEditTweet(tweet) {
				this.draft = {
					id: tweet.id,
					content: tweet.content
				};
				this.lastEditedTweet = tweet;
			}
		},
		created() {
			this.loadTweets();
		}
	};
});