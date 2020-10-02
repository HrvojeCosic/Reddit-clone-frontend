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
			<div v-show="tokenFound" class="logged-in-user">
				<h3>{{ username }}</h3>
			</div>
			<button v-show="tokenFound" @click="logout" class="logout-btn">
				Log Out
			</button>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			tokenFound: localStorage.getItem('token'),
			username: '',
		};
	},
	mounted() {
		const tokenFound = localStorage.getItem('token');
		if (tokenFound) {
			axios
				.get('http://localhost:3000/api/users/login', {
					headers: { token: tokenFound },
				})
				.then(res => {
					this.username = res.data.user.username;
				})
				.catch(err => {
					console.log(err);
				});
		}
	},
	methods: {
		logout() {
			const clearJWT = localStorage.clear();
			this.tokenFound = clearJWT;
		},
	},
};
</script>

<style scoped>
@import './Header.css';
</style>
