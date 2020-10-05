<template>
	<div class="main">
		<Header />
		<Feed />
	</div>
</template>

<script>
import Feed from './Feed/Feed.vue';
import Header from './Header/Header.vue';

export default {
	components: { Feed, Header },
	data() {
		return {};
	},
};
</script>

<style scoped>
.main {
	background-color: #dae0e6;
}
</style>
