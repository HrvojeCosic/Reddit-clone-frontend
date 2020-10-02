<template>
	<div>
		<div class="log-in-container">
			<h2>Login To Your Account</h2>
			<form class="loginbox" autocomplete="off">
				<input placeholder="Email" type="text" id="email" v-model="email" />
				<input
					placeholder="Password"
					type="password"
					id="password"
					v-model="password"
				/>
				<button id="submit" @click="login">Login</button>
			</form>
			<h3 v-bind:class="[alert === 'login successful.' ? success : failed]">
				{{ alert }}
			</h3>
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
import axios from 'axios';
import router from '../../router/index';
export default {
	data() {
		return {
			email: '',
			password: '',
			alert: '',
			failed: 'login-failed',
			success: 'logged-in',
		};
	},
	methods: {
		login() {
			const user = {
				email: this.email,
				password: this.password,
			};
			axios
				.post('http://localhost:3000/api/users/login', user)
				.then(res => {
					this.alert = res.data.title;
					localStorage.setItem('token', res.data.token);
					router.push('/');
				})
				.catch(err => {
					this.alert = err.response.data.error;
				});
		},
	},
	name: 'LogInPage',
};
</script>

<style scoped>
@import './LogInPage.css';
</style>
