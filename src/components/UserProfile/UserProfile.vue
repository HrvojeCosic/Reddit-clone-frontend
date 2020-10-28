<template>
	<div>
		<Header />
		<div id="user-profile-container">
			<div class="user-overview">
				<img src="../../assets/profile-picture.png" class="profile-picture" />
				<div class="username" v-if="!loadingSpinner">u/{{ username }}</div>
				<div class="loader" v-else />
				<div class="user-timestamp" v-if="!loadingSpinner">
					Created: {{ timestamp }}
				</div>
				<div v-if="!loadingSpinner">posts: {{ posts.length }}</div>
			</div>
			<div class="posts-user-profile">
				<div v-for="post in posts" :key="post._id">
					<Post v-bind:post="post" v-bind:classProp="'user-profile'" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Header from '../Header/Header.vue';
import Post from '../Post/Post.vue';
import axios from 'axios';

export default {
	created() {
		axios.get(`api/users/user/${this.user_id}`).then(res => {
			const { userUsername, userTimestamp, posts } = res.data;
			this.username = userUsername;
			this.timestamp = userTimestamp;
			this.posts = posts;

			this.loadingSpinner = false;
		});
	},
	data() {
		return {
			username: '',
			timestamp: '',
			posts: [],
			loadingSpinner: true,
		};
	},
	components: { Header, Post },
	props: ['user_id'],
};
</script>

<style>
@import './UserProfile.css';
</style>
