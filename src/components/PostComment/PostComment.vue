<template>
	<div class="comment">
		<div class="upper-part-comment">
			<div class="voting-comment">
				<div class="upvote-comment" />
				<div class="downvote-comment" />
			</div>
			<p class="author">{{ comment.author }}</p>
			<p class="points">{{ comment.upvotes }} points ·</p>
			<p class="date">{{ comment.timestamp }}</p>
			<p class="edited" v-show="comment.edited">comment edited</p>
		</div>
		<h3 class="content">{{ comment.content }}</h3>
	</div>
</template>

<script>
export default {
	props: ['comment'],
};
</script>
