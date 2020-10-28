<template>
	<div class="community-hero">
		<Header />
		<div class="community-header" v-if="!loadingSpinner">
			<h1>r/{{ name }}</h1>
			<h3>{{ description }}</h3>
			<div class="community-side-info">
				<p>Created {{ timestamp }}</p>
				<p>{{ numberOfPosts }} posts</p>
			</div>
		</div>
		<div class="loader" v-else />
		<div class="community-post-container">
			<Post
				v-for="post in this.$store.state.postsToShow"
				v-bind:key="post._id"
				v-bind:post="post"
				v-bind:classProp="'user-profile'"
			/>
		</div>
	</div>
</template>

<script>
import Post from '../Post/Post.vue';
import Header from '../Header/Header.vue';
import axios from 'axios';
export default {
	beforeCreate() {
		const currentSubreddit = this.$route.params.subreddit;
		axios.get(`api/subreddits/subreddit/${currentSubreddit}`).then(res => {
			this.$store.commit('changePostsToShow', res.data.posts);
			this.name = res.data.name;
			this.description = res.data.description;
			this.timestamp = res.data.timestamp;
			this.numberOfPosts = res.data.posts.length;

			this.loadingSpinner = false;
		});
	},
	data() {
		return {
			name: '',
			description: '',
			timestamp: '',
			numberOfPosts: 0,
			loadingSpinner: true,
		};
	},
	components: { Header, Post },
};
</script>

<style scoped>
@import './Community.css';
</style>
