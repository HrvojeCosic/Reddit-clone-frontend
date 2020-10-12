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
	data() {
		return {
			upvotedPostsArr: this.$store.state.upvotedPosts,
			downvotedPostsArr: this.$store.state.downvotedPosts,
			upvoteToggle: false,
			downvoteToggle: false,
		};
	},
	props: ['post'],
	methods: {
		upvotePost(postId) {
			if (this.downvoteToggle) {
				this.$store.commit('removeDownvotedPost', postId);
				this.$store.commit('pushUpvotedPost', postId);
				this.downvoteToggle = false;
				this.upvoteToggle = true;
				this.postUpvotes += 2; //AVOID MUTATING A PROP DIRECTLY ERRROR... TODO INSTEAD: COMMIT('')
				//ALSO REPLACE upvoteToggle and downvoteToggle with vuex state properties.
				return;
			}
			if (this.upvoteToggle) {
				this.$store.commit('removeUpvotedPost', postId);
				this.upvoteToggle = false;
				this.postUpvotes--; //AVOID MUTATING A PROP DIRECTLY
				return;
			} else {
				this.upvoteToggle = true;
				this.downvoteToggle = false;
				this.postUpvotes++; //AVOID MUTATING A PROP DIRECTLY
			}
			this.$store.commit('pushUpvotedPost', postId);
		},
		downvotePost(postId) {
			if (this.upvoteToggle) {
				this.$store.commit('removeUpvotedPost', postId);
				this.$store.commit('pushDownvotedPost', postId);
				this.upvoteToggle = false;
				this.downvoteToggle = true;
				this.postUpvotes -= 2; //AVOID MUTATING A PROP DIRECTLY
				return;
			}
			if (this.downvoteToggle) {
				this.$store.commit('removeDownvotedPost', postId);
				this.downvoteToggle = false;
				this.postUpvotes++; //AVOID MUTATING A PROP DIRECTLY
				return;
			} else {
				this.downvoteToggle = true;
				this.upvoteToggle = false;
				this.postUpvotes--; //AVOID MUTATING A PROP DIRECTLY
			}
			this.$store.commit('pushDownvotedPost', postId);
		},
	},
};
</script>

<style>
@import './PostVoting.css';
</style>
