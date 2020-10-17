<template>
	<div>
		{{ username }}
		{{ timestamp }}
		{{ posts }}
	</div>
</template>

<script>
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
	props: ['user_id'],
};
</script>
