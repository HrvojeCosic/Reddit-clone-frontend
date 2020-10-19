<template>
	<div>
		<Header />
		<div id="user-profile-container">
			<div class="user-overview">
				<img src="../../assets/profile-picture.png" class="profile-picture" />
				<div class="username">u/{{ username }}</div>
				<div class="user-timestamp">Created: {{ timestamp }}</div>
				<div>posts: {{ posts.length }}</div>
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
		axios
			.get(`http://localhost:3000/api/users/user/${this.user_id}`)
			.then(res => {
				const { userUsername, userTimestamp, posts } = res.data;
				this.username = userUsername;
				this.timestamp = userTimestamp;
				this.posts = posts;
			});
	},
	data() {
		return {
			username: '',
			timestamp: '',
			posts: [],
		};
	},
	components: { Header, Post },
	props: ['user_id'],
};
</script>

<style>
@import './UserProfile.css';
</style>
