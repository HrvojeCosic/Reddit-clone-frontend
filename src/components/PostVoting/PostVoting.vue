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
			{{ post.upvotes }}
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
	methods: {
		upvotePost(postId) {
			//IF POST IS CURRENTLY DOWNVOTED
			if (this.$store.state.downvotedPosts.includes(postId)) {
				this.$store.commit('removeDownvotedPost', postId);
				this.$store.commit('pushUpvotedPost', postId);
				this.post.upvotes += 2;
				return;
			}
			//IF POST IS CURRENTLY UPVOTED
			if (this.$store.state.upvotedPosts.includes(postId)) {
				this.$store.commit('removeUpvotedPost', postId);
				this.post.upvotes--;
				return;
			}
			this.$store.commit('pushUpvotedPost', postId);
			this.post.upvotes++;
		},
		downvotePost(postId) {
			//IF POST IS CURRENTLY UPVOTED
			if (this.$store.state.upvotedPosts.includes(postId)) {
				this.$store.commit('removeUpvotedPost', postId);
				this.$store.commit('pushDownvotedPost', postId);
				this.post.upvotes -= 2;
				return;
			}
			//IF POST IS CURRENTLY DOWNVOTED
			if (this.$store.state.downvotedPosts.includes(postId)) {
				this.$store.commit('removeDownvotedPost', postId);
				this.post.upvotes++;
				return;
			}
			this.post.upvotes--;
			this.$store.commit('pushDownvotedPost', postId);
		},
	},
};
</script>

<style>
@import './PostVoting.css';
</style>
