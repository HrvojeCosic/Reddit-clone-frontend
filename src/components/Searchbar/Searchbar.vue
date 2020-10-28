<template>
	<input
		class="search"
		placeholder="Search for posts"
		@keyup.enter="searchPosts"
		v-show="this.$route.path == '/'"
	/>
</template>

<script>
import axios from 'axios';
export default {
	methods: {
		searchPosts(e) {
			//IF SEARCHBOX'S FIRST CHAR IS NOT '.' AND IF IT IS NOT EMPTY
			if (e.target.value[0] != '.') {
				if (e.target.value.length > 0) {
					axios.get(`api/posts/searchPost/${e.target.value}`).then(posts => {
						this.$store.commit('changePostsToShow', posts.data.postsFound);
					});
				} else {
					axios.get('api/posts/').then(res => {
						this.$store.state.postsToShow = res.data.posts;
					});
				}
			}
		},
	},
};
</script>
