<template>
	<div class="community-hero">
		<Header />
		{{ name }}
		{{ description }}
		<div class="post-container">
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
		axios
			.get(`http://localhost:3000/api/subreddits/subreddit/${currentSubreddit}`)
			.then(res => {
				this.$store.commit('changePostsToShow', res.data.posts);
				this.name = res.data.name;
				this.description = res.data.description;
			});
	},
	data() {
		return {
			name: '',
			description: '',
		};
	},
	components: { Header, Post },
};
</script>
