<template>
	<div class="post-voting">
		<div
			class="upvote"
			v-bind:class="{
				//Set class if there's that post in the Vuex state's upvotedPosts array
				upvotedPost: this.$store.state.upvotedPosts.includes(post._id),
			}"
			@click="upvotePost(post._id)"
		/>
		<div
			v-bind:class="{
				//Set class depending on in which (if any) Vuex state's array the post's _id is
				upvotedNumber: this.$store.state.upvotedPosts.includes(post._id),
				downvotedNumber: this.$store.state.downvotedPosts.includes(post._id),
			}"
		>
			{{ post.upvotes }}
		</div>
		<div
			class="downvote"
			v-bind:class="{
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
			if (this.$store.state.downvotedPosts.includes(postId)) {
				this.$store.commit('removeDownvotedPost', postId);
				this.$store.commit('pushUpvotedPost', postId);
				return;
			}
			if (this.$store.state.upvotedPosts.includes(postId)) {
				this.$store.commit('removeUpvotedPost', postId);
				return;
			}
			this.$store.commit('pushUpvotedPost', postId);
		},
		downvotePost(postId) {
			if (this.$store.state.upvotedPosts.includes(postId)) {
				this.$store.commit('removeUpvotedPost', postId);
				this.$store.commit('pushDownvotedPost', postId);
				return;
			}
			if (this.$store.state.downvotedPosts.includes(postId)) {
				this.$store.commit('removeDownvotedPost', postId);
				return;
			}
			this.$store.commit('pushDownvotedPost', postId);
		},
	},
};
</script>

<style>
@import './PostVoting.css';
</style>
