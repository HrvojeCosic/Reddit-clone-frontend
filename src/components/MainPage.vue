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
};
</script>

<style>
.main {
	background-color: #dae0e6;
}
@media only screen and (max-width: 820px) {
	.featured-communities-container {
		display: none;
	}

	#post-container {
		margin: 0;
	}
	.create-post-container {
		margin: 5px 0;
	}
	.create-community-sticky {
		display: unset;
	}
}
@media only screen and (max-width: 735px) {
	.title h1 {
		display: none;
	}
	.search {
		margin: 5px;
	}
}
@media only screen and (max-width: 590px) {
	.search {
		min-width: 1px;
	}
	.sign-up-btn,
	.log-in-btn {
		width: 120px;
	}
	.points-date {
		flex-direction: column;
		margin-left: 10px;
	}
	.post-title {
		padding-right: 80px;
	}
}
</style>
