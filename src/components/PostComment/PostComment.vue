<template>
	<div class="comment">
		<div class="upper-part-comment">
			<CommentVoting :comment="comment" v-on:update-upvotes="updateUpvotes" />
			<p class="author">{{ comment.author }}</p>
			<p class="points">{{ commentUpvotes }} points ·</p>
			<p class="date">{{ comment.timestamp }}</p>
			<p class="edited" v-show="comment.edited">comment edited</p>
		</div>
		<h3 class="content">{{ comment.content }}</h3>
	</div>
</template>

<script>
import CommentVoting from '../CommentVoting/CommentVoting.vue';
export default {
	data() {
		return {
			commentUpvotes: this.comment.upvotes,
		};
	},
	components: { CommentVoting },
	props: ['comment'],
	methods: {
		updateUpvotes(upvotes) {
			this.commentUpvotes += upvotes;
		},
	},
};
</script>
