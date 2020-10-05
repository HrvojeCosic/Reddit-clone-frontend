<template>
	<div class="feed-container">
		<div class="post-container">
			<CreatePost v-show="this.$store.state.tokenFound" />
			<Post v-bind:key="post.id" v-bind:post="post" />
			<!-- v-for="post in postsData" -->
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
	data() {
		return {
			posts: null,
		};
	},
	name: 'Feed',
	components: { Post, FeaturedCommunities, CreatePost },
	mounted() {
		axios.get('http://localhost:3000/api/posts').then(res => {
			this.posts = res.data.posts;
			console.log(this.posts);
		});
	},
	computed: {
		uniqueCommunities() {
			const postsData = this.$props.postsData;
			let uniqueComms = [];
			postsData.forEach(post => {
				uniqueComms.push(post.community);
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
