<template>
	<div class="post-voting">
		<div
			class="upvote"
			v-bind:class="{ upvotedPost: upvoteToggle }"
			@click="upvotePost"
		/>
		<div
			v-bind:class="{
				upvotedNumber: upvoteToggle,
				downvotedNumber: downvoteToggle,
			}"
		>
			{{ postUpvotes }}
		</div>
		<div
			class="downvote"
			v-bind:class="{ downvotedPost: downvoteToggle }"
			@click="downvotePost"
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			upvoteToggle: false,
			downvoteToggle: false,
		};
	},
	props: ['postUpvotes'],
	methods: {
		upvotePost() {
			if (this.downvoteToggle) {
				this.downvoteToggle = false;
				this.upvoteToggle = true;
				this.postUpvotes += 2;
			} else if (this.upvoteToggle) {
				this.upvoteToggle = false;
				this.postUpvotes--;
			} else {
				this.upvoteToggle = true;
				this.downvoteToggle = false;
				this.postUpvotes++;
			}
		},
		downvotePost() {
			if (this.upvoteToggle) {
				this.upvoteToggle = false;
				this.downvoteToggle = true;
				this.postUpvotes -= 2;
			} else if (this.downvoteToggle) {
				this.downvoteToggle = false;
				this.postUpvotes++;
			} else {
				this.downvoteToggle = true;
				this.upvoteToggle = false;
				this.postUpvotes--;
			}
		},
	},
};
</script>

<style>
@import './PostVoting.css';
</style>
