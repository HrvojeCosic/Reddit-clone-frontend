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
				<form @submit="createNewComment">
					<div class="comment-input" type="text" contenteditable="true" />
					<input type="submit" value="COMMENT" />
				</form>
			</div>
			<div class="comments-container">
				<div v-for="comment in this.comments" :key="comment._id">
					<div class="comment">{{ comment.content }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import Header from '../Header/Header.vue';
export default {
	created() {
		//FETCH ALL COMMENTS OF THE CLICKED-ON POST
		const postId = this.$store.state.clickedPost._id;
		axios
			.get(`http://localhost:3000/api/posts/${postId}`)
			.then(comments => {
				const fetchedComments = comments.data.comments;
				fetchedComments.forEach(comment => {
					this.comments.push(comment);
				});
			})
			.catch(() => {
				this.error = 'Failed to retrieve comments';
			});
	},
	data() {
		return {
			post: this.$store.state.clickedPost,
			comments: [],
			error: '',
		};
	},
	components: { Header },
	methods: {
		createNewComment(e) {
			const comment = e.target.innerText;
			axios.post(`http://localhost:3000/api/posts/post/${this.post._id}`, {
				author: this.$store.state.currentUser,
				comment,
				timestamp: new Date().toLocaleDateString(),
			});
		},
	},
};
</script>

<style>
@import './PostContent.css';
</style>
