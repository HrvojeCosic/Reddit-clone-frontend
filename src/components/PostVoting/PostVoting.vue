<template>
	<div class="post-voting">
		<div
			class="upvote"
			:class="{
				//Set class if there's that post in the Vuex state's upvotedPosts array
				upvotedPost: this.$store.state.upvotedPosts.includes(post._id),
			}"
			@click="upvotePost(post._id)"
		/>
		<div
			:class="{
				//Set class depending on in which (if any) Vuex state's array the post's _id is
				upvotedNumber: this.$store.state.upvotedPosts.includes(post._id),
				downvotedNumber: this.$store.state.downvotedPosts.includes(post._id),
			}"
		>
			{{ upvotes }}
		</div>
		<div
			class="downvote"
			:class="{
				downvotedPost: this.$store.state.downvotedPosts.includes(post._id),
			}"
			@click="downvotePost(post._id)"
		/>
	</div>
</template>

<script>
export default {
	props: ['post'],
	data() {
		return {
			upvotes: this.post.upvotes,
		};
	},
	methods: {
		upvotePost(postId) {
			//IF POST IS CURRENTLY DOWNVOTED
			if (this.$store.state.downvotedPosts.includes(postId)) {
				this.$store.commit('removeDownvotedPost', postId);
				this.$store.commit('pushUpvotedPost', postId);
				this.upvotes += 2;
				return;
			}
			//IF POST IS CURRENTLY UPVOTED
			if (this.$store.state.upvotedPosts.includes(postId)) {
				this.$store.commit('removeUpvotedPost', postId);
				this.upvotes--;
				return;
			}
			this.$store.commit('pushUpvotedPost', postId);
			this.upvotes++;
		},
		downvotePost(postId) {
			//IF POST IS CURRENTLY UPVOTED
			if (this.$store.state.upvotedPosts.includes(postId)) {
				this.$store.commit('removeUpvotedPost', postId);
				this.$store.commit('pushDownvotedPost', postId);
				this.upvotes -= 2;
				return;
			}
			//IF POST IS CURRENTLY DOWNVOTED
			if (this.$store.state.downvotedPosts.includes(postId)) {
				this.$store.commit('removeDownvotedPost', postId);
				this.upvotes++;
				return;
			}
			this.$store.commit('pushDownvotedPost', postId);
			this.upvotes--;
		},
	},
};
</script>

<style>
@import './PostVoting.css';
</style>
