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
				<button id="submit" @click="createUser">
					<p v-if="!loadingSpinner">Sign Up</p>
					<div class="loader button-loader" v-else />
				</button>
				<h3
					v-bind:class="[
						alert === 'Signed up successfully.' ? success : failed,
					]"
				>
					{{ alert }}
				</h3>
				<router-link to="/" class="back-to-hp2">Back to home page</router-link>
			</form>
		</div>
	</div>
</template>

<script>
import router from '../../router/index';
import axios from 'axios';
export default {
	data() {
		return {
			username: '',
			password: '',
			repeatPassword: '',
			email: '',
			createdAt: new Date().toLocaleDateString(),
			alert: '',
			success: 'signed-up',
			failed: 'signup-failed',
			loadingSpinner: false,
		};
	},
	methods: {
		createUser() {
			this.loadingSpinner = true;
			const newUser = {
				username: this.username,
				password: this.password,
				repeatPassword: this.repeatPassword,
				email: this.email,
				createdAt: this.createdAt,
			};
			axios
				.post('api/users', newUser)
				.then(res => {
					this.alert = res.data.title;
					router.push('/log-in');
					this.loadingSpinner = false;
				})
				.catch(err => {
					this.alert = err.response.data.error;
					this.loadingSpinner = false;
				});
		},
	},
	name: 'SignUpPage',
};
</script>

<style scoped>
@import './SignUpPage.css';
</style>
