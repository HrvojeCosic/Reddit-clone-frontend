<template>
	<div class="feed-container">
		<div class="post-container">
			<CreatePost v-show="this.$store.state.tokenFound" />
			<Post
				v-for="post in this.$store.state.postsToShow"
				v-bind:key="post._id"
				v-bind:post="post"
			/>
		</div>
		<div class="featured-communities-container">
			<h1 class="featured-communities-title">FeaturedCommunities</h1>
			<FeaturedCommunities
				v-for="community in uniqueCommunities"
				:key="community"
				:community="community"
			/>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import CreatePost from '../CreatePost/CreatePost';
import Post from '../Post/Post.vue';
import FeaturedCommunities from '../FeaturedCommunities/FeaturedCommunities.vue';
export default {
	name: 'Feed',
	components: { Post, FeaturedCommunities, CreatePost },
	beforeCreate() {
		axios.get('http://localhost:3000/api/posts/').then(res => {
			this.$store.state.postsToShow = res.data.posts;
		});
	},
	computed: {
		uniqueCommunities() {
			let uniqueComms = [];
			this.$store.state.postsToShow.forEach(post => {
				uniqueComms.push(post.subreddit);
			});
			uniqueComms = new Set(uniqueComms);
			return uniqueComms;
		},
	},
};
</script>

<style scoped>
@import './Feed.css';
</style>
