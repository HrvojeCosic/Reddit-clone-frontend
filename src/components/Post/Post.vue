<template>
	<div
		v-bind:id="[
			classProp === 'user-profile'
				? profilePagePostContainer
				: mainPagePostContainer,
		]"
	>
		<PostVoting :post="post" />
		<router-link
			class="post-link"
			:to="{ name: 'PostContent', params: { id: post._id, post } }"
		>
			<div class="post-main" @click="findClickedPost">
				<div class="upper-part">
					<a class="community">r/{{ post.subreddit }}</a>
					<a class="posted-by">u/{{ post.author.username }}</a>
					<a class="date-posted">{{ post.timestamp }}</a>
				</div>
				<div class="post-title">{{ post.title }}</div>
				<div class="comments">{{ post.comments.length }} comments</div>
			</div>
		</router-link>
	</div>
</template>

<script>
import PostVoting from '../PostVoting/PostVoting.vue';
export default {
	components: { PostVoting },
	name: 'Post',
	props: ['post', 'classProp'],
	data() {
		return {
			mainPagePostContainer: 'post-container',
			profilePagePostContainer: 'profile-post-container',
		};
	},
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
			const author = this.post.author.username;
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
