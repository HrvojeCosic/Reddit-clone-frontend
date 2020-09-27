<template>
	<div class="featured-communities">r/{{ community }}</div>
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
