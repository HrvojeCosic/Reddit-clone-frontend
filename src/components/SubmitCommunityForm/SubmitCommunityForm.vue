<template>
	<div>
		<div class="comm-modal" @click="$emit('close-community-modal')"></div>
		<div class="new-community-modal">
			<div class="comm-form-container">
				<div class="comm-title">
					<h2>Create a community</h2>
					<button class="close-button" @click="$emit('close-community-modal')">
						X
					</button>
				</div>
				<h3>Name</h3>
				<input type="text" class="comm-name" v-model="communityName" />
				<form>
					<h3>Description</h3>
					<textarea
						type="text"
						class="comm-description"
						v-model="communityDesc"
					/>
					<h3 style="color:#E73A37">{{ error }}</h3>
				</form>
				<input
					type="submit"
					value="CREATE COMMUNITY"
					class="submit-comm"
					@click="submitNewCommunity"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			communityName: '',
			communityDesc: '',
			error: '',
		};
	},
	methods: {
		submitNewCommunity() {
			if (this.communityName.length <= 0 || this.communityDesc.length <= 0) {
				return (this.error = 'Please fill out all fields');
			}
			this.error = '';
			axios
				.post('http://localhost:3000/api/subreddits/new-subreddit', {
					communityName: this.communityName,
					communityDesc: this.communityDesc,
					timestamp: new Date().toLocaleDateString(),
				})
				.then(() => {
					this.$emit('close-community-modal');
					this.communityName = '';
					this.communityDesc = '';
				})
				.catch(res => {
					this.error = res.data.error;
				});
		},
	},
};
</script>
<style>
@import './SubmitCommunityForm.css';
</style>
