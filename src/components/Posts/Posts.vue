<template>
	<div>
		<Post v-for="post in postsData" v-bind:key="post.id" v-bind:post="post" />
	</div>
</template>

<script>
import Post from '../Post/Post.vue';
export default {
	name: 'Posts',
	props: ['postsData'],
	components: { Post },
};
</script>

<style scoped></style>
