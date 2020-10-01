<template>
	<div>
		<div class="sign-up-container">
			<h2>Create a new account</h2>
			<form class="loginbox" autocomplete="off">
				<input
					placeholder="Username"
					type="text"
					id="username"
					v-model="username"
				/>
				<input placeholder="E-mail" type="text" id="e-mail" v-model="email" />
				<input
					placeholder="Password"
					type="password"
					id="password"
					v-model="password"
				/>
				<input
					placeholder="Repeat password"
					type="password"
					id="repeat-password"
					v-model="repeatPassword"
				/>
				<button id="submit" @click="createUser">Sign Up</button>
				<router-link to="/" class="back-to-hp2">Back to home page</router-link>
			</form>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			username: '',
			password: '',
			repeatPassword: '',
			email: '',
			createdAt: new Date(),
		};
	},
	methods: {
		createUser() {
			const newUser = {
				username: this.username,
				password: this.password,
				repeatPassword: this.repeatPassword,
				email: this.email,
				createdAt: this.createdAt,
			};
			axios
				.post('http://localhost:3000/api/users', newUser)
				.then(res => {
					console.log(res);
				})
				.catch(err => {
					console.log(err.response);
				});
		},
	},
	name: 'SignUpPage',
};
</script>

<style scoped>
@import './SignUpPage.css';
</style>
