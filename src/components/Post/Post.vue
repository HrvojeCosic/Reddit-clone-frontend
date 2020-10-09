<template>
	<div id="post-container">
		<div class="post-voting">
			<div class="upvote" @click="post.upvotes++" />
			<div class="number-of-votes">{{ post.upvotes }}</div>
			<div class="downvote" @click="post.upvotes--" />
		</div>
		<router-link
			class="post-link"
			:to="{ name: 'PostContent', params: { id: post._id } }"
		>
			<div class="post-main" @click="findClickedPost">
				<div class="upper-part">
					<a class="community">r/{{ post.subreddit }}</a>
					<a class="posted-by">u/{{ post.author[0].username }}</a>
					<a class="date-posted">{{ post.timestamp }}</a>
				</div>
				<div class="post-title">{{ post.title }}</div>
				<div class="comments">{{ post.comments }} comments</div>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'Post',
	props: ['post'],
	methods: {
		findClickedPost() {
			this.$store.state.clickedPost = [];
			const {
				upvotes,
				subreddit,
				timestamp,
				title,
				comments,
				text,
				_id,
			} = this.post;
			const author = this.post.author[0].username;
			const clickedPost = {
				author,
				title,
				subreddit,
				timestamp,
				comments,
				upvotes,
				text,
				_id,
			};
			this.$store.commit('changeClickedPost', clickedPost);
		},
	},
};
</script>

<style scoped>
@import './Post.css';
</style>
