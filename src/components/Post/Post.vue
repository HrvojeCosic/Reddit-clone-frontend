<template>
	<div id="post">
		<div class="voting">
			<div class="upvote" @click="post.upvotes++" />
			<div class="number-of-votes">{{ post.upvotes }}</div>
			<div class="downvote" @click="post.upvotes--" />
		</div>
		<div class="upper-part">
			<a class="community">r/{{ post.subreddit }}</a>
			<a class="posted-by">u/{{ post.author[0].username }}</a>
			<a class="date-posted">{{ post.timestamp }}</a>
		</div>
		<div class="post-title">{{ post.title }}</div>
		<div class="comments">{{ post.comments }} comments</div>
	</div>
</template>

<script>
export default {
	name: 'Post',
	props: ['post'],
	methods: {},
};
</script>

<style scoped>
@import './Post.css';
</style>
