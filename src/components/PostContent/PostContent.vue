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
					<p class="author">Posted by u/{{ post.author }}</p>
				</div>
				<p class="timestamp">{{ post.timestamp }}</p>
				<div class="post-mid-part">
					<h3>{{ post.title }}</h3>
					<p>{{ post.text }}</p>
				</div>
				<div class="post-lower-part">
					<p>{{ comments.length }} comments</p>
				</div>
			</div>
			<div class="post-submit-comment">
				<form @submit="createNewComment" :key="formKey">
					<div class="comment-input" type="text" contenteditable="true" />
					<input type="submit" value="COMMENT" />
				</form>
			</div>
			<div class="comments-container">
				<div v-for="comment in this.comments" :key="comment._id">
					<PostComment :comment="comment" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import Header from '../Header/Header.vue';
import PostComment from '../PostComment/PostComment.vue';
export default {
	created() {
		axios
			.get(`http://localhost:3000/api/posts/${this.post._id}`)
			.then(comments => {
				comments.data.comments.forEach(comment => {
					this.comments.push(comment);
				});
			});
	},
	data() {
		return {
			post: this.$store.state.clickedPost,
			comments: [],
			error: '',
			formKey: 0,
		};
	},
	components: { Header, PostComment },
	methods: {
		createNewComment(e) {
			const comment = e.target.innerText;
			axios
				.post(`http://localhost:3000/api/posts/post/${this.post._id}`, {
					author: this.$store.state.currentUser,
					comment,
					timestamp: new Date().toLocaleDateString(),
				})
				.then(newPost => {
					this.comments.push(newPost.data.comment);
				});
			this.formKey++;
		},
	},
};
</script>

<style>
@import './PostContent.css';
</style>
