<template>
	<router-link
		:to="{ name: 'Community', params: { subreddit: community } }"
		class="link"
	>
		<div class="featured-communities">r/{{ community }}</div>
	</router-link>
</template>

<script>
export default {
	name: 'FeaturedCommunities',
	props: ['community'],
};
</script>

<style scoped>
@import './FeaturedCommunities.css';
</style>
