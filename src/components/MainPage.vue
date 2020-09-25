<template>
	<div class="main">
		<Posts v-bind:postsData="posts" />
	</div>
</template>

<script>
import Posts from './Posts/Posts';
import { v4 as uuidv4 } from 'uuid';

export default {
	components: { Posts },
	data() {
		return {
			posts: [
				{
					title: 'Who is the bad guy in history who is not actually a bad guy?',
					community: 'AskReddit',
					postedBy: 'Elytra__Firm',
					date: Date.now(),
					upvotes: 5,
					downvotes: 1,
					comments: 12,
					id: uuidv4(),
				},
			],
		};
	},
};
</script>

<style scoped>
.main {
	background-color: #dae0e6;
}
</style>
