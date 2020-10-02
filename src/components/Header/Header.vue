<template>
	<div id="header">
		<div class="title">
			<img id="logo" src="../../../src/assets/logo.png" />
			<h1>RedditLight</h1>
		</div>
		<input class="search" placeholder="Search" />
		<div class="buttons-log-sign">
			<router-link to="/log-in" class="log-in-btn" v-show="!tokenFound"
				>LOG IN</router-link
			>
			<router-link to="/sign-up" class="sign-up-btn" v-show="!tokenFound"
				>SIGN UP</router-link
			>
			<div v-show="tokenFound">
				<h3>username example</h3>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tokenFound: localStorage.getItem('token'),
		};
	},
	mounted() {
		const tokenFound = localStorage.getItem('token');
		if (tokenFound) {
			console.log(tokenFound);
		}
	},
};
</script>

<style scoped>
@import './Header.css';
</style>
