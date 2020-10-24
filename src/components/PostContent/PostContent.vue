<template>
	<div>
		<Header />
		<div id="post-content-container">
			<div class="post-voting">
				<PostVoting :post="post" :style="{ backgroundColor: 'white' }" />
			</div>
			<div class="post-details">
				<div class="post-upper-part">
					<router-link
						:to="{ name: 'Community', params: { subreddit: post.subreddit } }"
						class="link"
					>
						<h3>r/{{ post.subreddit }}</h3>
					</router-link>

					<p class="author">
						Posted by
						<router-link
							class="link"
							:to="{
								name: 'UserProfile',
								params: { user_id: post.author._id },
							}"
							>u/{{ post.author.username }}
						</router-link>
					</p>
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
import PostVoting from '../PostVoting/PostVoting.vue';
export default {
	created() {
		axios
			.get(`http://localhost:3000/api/posts/post/${this.post._id}`)
			.then(res => {
				res.data.post.comments.forEach(comment => {
					this.comments.push(comment);
				});
				this.post = res.data.post;
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
	components: { Header, PostComment, PostVoting },
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
