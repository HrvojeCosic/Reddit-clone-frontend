<template>
	<div>
		<Header />
		<div class="form-container">
			<div class="form-header">
				<h2>Create a post</h2>
				<h3>Choose a community</h3>
				<select v-model="postCommunity">
					<option
						v-for="community in communities"
						:key="community.name"
						:value="community"
						>r/{{ community }}</option
					>
				</select>
			</div>
			<form>
				<input type="text" placeholder="Title" v-model="postTitle" />
				<textarea
					type="text"
					placeholder="Text (optional)"
					v-model="postText"
				/>
			</form>
			<div class="buttons-container">
				<router-link to="/"><input type="submit" value="CANCEL"/></router-link>
				<input type="submit" value="POST" @click="submitPost" />
			</div>
			<h1 style="color:#E73A37">{{ error }}</h1>
		</div>
	</div>
</template>

<script>
import Header from '../../components/Header/Header.vue';
import axios from 'axios';
export default {
	beforeCreate() {
		axios.get('http://localhost:3000/api/subreddits/').then(res => {
			const uniqueCommunities = new Set(res.data);
			this.communities = uniqueCommunities;
		});
	},
	data() {
		return {
			postCommunity: '',
			postTitle: '',
			postText: '',
			timestamp: new Date(),
			error: '',
			communities: [],
		};
	},
	components: {
		Header,
	},
	methods: {
		submitPost() {
			const newPost = {
				author: this.$store.state.currentUser,
				community: this.postCommunity,
				title: this.postTitle,
				text: this.postText,
				timestamp: this.timestamp.toLocaleDateString(),
			};
			if (newPost.community === '' || newPost.title === '') {
				this.error = 'Please fill out all the required fields.';
			} else {
				axios
					.post('http://localhost:3000/api/posts', newPost)
					.then(() => {
						this.$router.push('/');
					})
					.catch(() => {
						this.error = 'Something went wrong. Try again later';
					});
			}
		},
	},
};
</script>

<style scoped>
@import './SubmitPostForm.css';
</style>
