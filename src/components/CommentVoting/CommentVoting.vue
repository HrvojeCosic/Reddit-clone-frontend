<template>
	<div class="voting-comment">
		<div class="upvote-comment" @click="upvoteComment" />
		<div class="downvote-comment" @click="downvoteComment" />
	</div>
</template>

<script>
import axios from 'axios';
export default {
	props: ['comment'],
	methods: {
		upvoteComment() {
			axios
				.put(
					`http://localhost:3000/api/comments/comment/vote/${this.comment._id}`,
					{ action: 'upvote' }
				)
				.then(newComment => {
					console.log(newComment);
					this.$emit('update-upvotes', newComment.data.updatedComment.upvotes);
				})
				.catch(err => {
					console.log(err);
				});
		},
		downvoteComment() {
			axios.put(
				`http://localhost:3000/api/comments/comment/vote/${this.comment._id}`,
				{ action: 'downvote' }
			);
		},
	},
};
</script>
