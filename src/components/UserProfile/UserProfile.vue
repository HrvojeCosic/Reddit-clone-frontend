<template>
	<div>
		<Header />
		<div id="user-profile-container">
			<div class="user-overview">
				<div class="username">u/{{ username }}</div>
				<div class="user-timestamp">Created: {{ timestamp }}</div>
				<div># of posts: {{ posts.length }}</div>
			</div>
			<div class="user-posts-container" v-for="post in posts" :key="post._id">
				<Post v-bind:post="post" />
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
