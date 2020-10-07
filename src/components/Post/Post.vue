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
			<div class="post-main">
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
	methods: {},
};
</script>

<style scoped>
@import './Post.css';
</style>
