<template>
	<div>
		<div class="log-in-container">
			<h2>Login To Your Account</h2>
			<form class="loginbox" autocomplete="off">
				<input placeholder="Username" type="text" id="username" />
				<input placeholder="Password" type="password" id="password" />
				<button id="submit">Login</button>
			</form>
			<div class="links">
				<router-link to="/" class="back-to-hp">Back to home page</router-link>
				<router-link to="/sign-up" class="sign-up-instead"
					>New? Sign-up instead</router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	name: 'LogInPage',
};
</script>

<style scoped>
@import './LogInPage.css';
</style>
