<template>
	<div id="header">
		<div class="title">
			<img id="logo" src="../../../src/assets/logo.png" />
			<h1>RedditLight</h1>
		</div>
		<input class="search" placeholder="Search" />
		<div class="buttons-log-sign">
			<router-link to="/log-in" class="log-in-btn">LOG IN</router-link>
			<router-link to="/sign-up" class="sign-up-btn">SIGN UP</router-link>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
@import './Header.css';
</style>
