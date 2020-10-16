<template>
	<div class="voting-comment">
		<div
			class="upvote-comment"
			:class="{
				//Set class if there's that comment in the Vuex state's upvotedComments array
				upvotedComment: this.$store.state.comments.upvotedComments.includes(
					comment._id
				),
			}"
			@click="upvoteComment(comment._id)"
		/>
		<div
			class="downvote-comment"
			:class="{
				//Set class if there's that comment in the Vuex state's upvotedComments array
				downvotedComment: this.$store.state.comments.downvotedComments.includes(
					comment._id
				),
			}"
			@click="downvoteComment(comment._id)"
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			upvotedComments: this.$store.state.comments.upvotedComments,
			downvotedComments: this.$store.state.comments.downvotedComments,
		};
	},
	props: ['comment'],
	methods: {
		upvoteComment(commentId) {
			//IF COMMENT IS CURRENTLY DOWNVOTED
			if (this.$store.state.comments.downvotedComments.includes(commentId)) {
				this.$store.commit('removeDownvotedComment', commentId);
				this.$store.commit('pushUpvotedComment', commentId);
				this.$emit('update-upvotes', 2);
				return;
			}
			//IF COMMENT IS CURRENTLY UPVOTED
			if (this.$store.state.comments.upvotedComments.includes(commentId)) {
				this.$store.commit('removeUpvotedComment', commentId);
				this.$emit('update-upvotes', -1);
				return;
			}
			this.$store.commit('pushUpvotedComment', commentId);
			this.$emit('update-upvotes', 1);
		},

		downvoteComment(commentId) {
			//IF COMMENT IS CURRENTLY UPVOTED
			if (this.$store.state.comments.upvotedComments.includes(commentId)) {
				this.$store.commit('removeUpvotedComment', commentId);
				this.$store.commit('pushDownvotedComment', commentId);
				this.$emit('update-upvotes', -2);
				return;
			}
			//IF COMMENT IS CURRENTLY DOWNVOTED
			if (this.$store.state.comments.downvotedComments.includes(commentId)) {
				this.$store.commit('removeDownvotedComment', commentId);
				this.$emit('update-upvotes', 1);
				return;
			}
			this.$store.commit('pushDownvotedComment', commentId);
			this.$emit('update-upvotes', -1);
		},
	},
};
</script>

<style scoped>
.upvotedComment {
	border-color: rgb(255, 87, 34);
}
.downvotedComment {
	border-color: rgb(49, 113, 216);
}
</style>
