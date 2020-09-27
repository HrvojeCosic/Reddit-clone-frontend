<template>
	<div class="feed-container">
		<div class="post-container">
			<Post v-for="post in postsData" v-bind:key="post.id" v-bind:post="post" />
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
import Post from '../Post/Post.vue';
import FeaturedCommunities from '../FeaturedCommunities/FeaturedCommunities.vue';
export default {
	name: 'Feed',
	props: ['postsData'],
	components: { Post, FeaturedCommunities },
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
