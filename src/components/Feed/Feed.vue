<template>
	<div class="feed-container" v-if="!loadingSpinner">
		<SubmitCommunityForm
			v-on:close-community-modal="toggleCommunityModal"
			:class="{ hidden: hideCommunityModal }"
		/>
		<div class="post-container">
			<CreatePost v-if="this.$store.state.tokenFound" />
			<div class="not-logged-in-post" v-else>
				Welcome! Log in to create posts and communities
			</div>
			<Post
				v-for="post in this.$store.state.postsToShow"
				v-bind:key="post._id"
				v-bind:post="post"
			/>
			<button class="create-community-sticky" @click="toggleCommunityModal">
				+
			</button>
		</div>
		<div class="featured-communities-container">
			<button
				class="create-community-title"
				@click="toggleCommunityModal"
				v-show="this.$store.state.tokenFound"
			>
				Create Community
			</button>
			<h1 class="featured-communities-title">
				FeaturedCommunities
			</h1>
			<FeaturedCommunities
				v-for="community in uniqueCommunities"
				:key="community"
				:community="community"
			/>
		</div>
	</div>
	<div class="loader-container" v-else>
		<div class="loader main-loader">
			<img
				src="../../../src/assets/logo.png"
				alt="Mode-toggle-btn"
				class="spinner-logo"
			/>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import CreatePost from '../CreatePost/CreatePost';
import Post from '../Post/Post.vue';
import FeaturedCommunities from '../FeaturedCommunities/FeaturedCommunities.vue';
import SubmitCommunityForm from '../SubmitCommunityForm/SubmitCommunityForm.vue';
export default {
	name: 'Feed',
	beforeCreate() {
		axios.get('http://localhost:3000/api/posts/').then(res => {
			this.$store.commit('changePostsToShow', res.data.posts);
			this.loadingSpinner = false;
		});
	},
	data() {
		return {
			hideCommunityModal: true,
			loadingSpinner: true,
		};
	},
	methods: {
		toggleCommunityModal() {
			this.hideCommunityModal
				? (this.hideCommunityModal = false)
				: (this.hideCommunityModal = true);
		},
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
	components: { Post, FeaturedCommunities, CreatePost, SubmitCommunityForm },
};
</script>

<style scoped>
@import './Feed.css';
</style>
