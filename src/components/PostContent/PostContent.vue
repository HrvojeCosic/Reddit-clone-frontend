<template>
	<div>
		<Header />
		<div id="post-content-container">
			<div class="post-voting-post">
				<div class="upvote-post" @click="post.upvotes++" />
				<div class="number-of-votes-post">{{ post.upvotes }}</div>
				<div class="downvote-post" @click="post.upvotes--" />
			</div>
			<div class="post-details">
				<div class="post-upper-part">
					<h3>r/{{ post.subreddit }}</h3>
					<p>Posted by u/{{ post.author }}</p>
					<p>{{ post.timestamp }}</p>
				</div>
				<div class="post-mid-part">
					<h1>{{ post.title }}</h1>
					<p>{{ post.text }}</p>
				</div>
				<div class="post-lower-part">
					<p>{{ post.comments.length }} comments</p>
				</div>
			</div>
			<div class="post submit-comment">
				<form>
					<input type="text" placeholder="What are your thoughts" />
					<input type="submit" value="COMMENT" />
				</form>
			</div>
			<div class="comments-container">
				<div
					class="comment"
					v-for="comment in post.comments"
					:key="comment._id"
				>
					<!-- TODO: SET UP COMMENTS -->
					{{ comment.text }}
					<!-- TODO: SET UP COMMENTS -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Header from '../Header/Header.vue';
export default {
	data() {
		return {
			post: this.$store.state.clickedPost,
		};
	},
	components: { Header },
};
</script>

<style>
@import './PostContent.css';
</style>
