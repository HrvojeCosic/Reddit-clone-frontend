<template>
	<div class="feed-container">
		<div class="post-container">
			<Post v-for="post in postsData" v-bind:key="post.id" v-bind:post="post" />
		</div>
		<div class="featured-communities-container">
			<h1 class="featured-communities-title">FeaturedCommunities</h1>
			<FeaturedCommunities
				v-for="post in postsData"
				v-bind:key="post.id"
				v-bind:community="post.community"
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
};
</script>

<style scoped>
@import './Feed.css';
</style>
