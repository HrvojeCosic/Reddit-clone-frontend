<template>
	<div id="header">
		<router-link to="/" class="link">
			<div class="title">
				<img id="logo" src="../../../src/assets/logo.png" />
				<h1>RedditLight</h1>
			</div>
		</router-link>
		<Searchbar />
		<button style="cursor: pointer" @click="toggleMode">TestDarkMode</button>
		<div class="buttons-log-sign">
			<router-link
				to="/log-in"
				class="log-in-btn"
				v-show="!$store.state.tokenFound"
				>LOG IN</router-link
			>
			<router-link
				to="/sign-up"
				class="sign-up-btn"
				v-show="!$store.state.tokenFound"
				>SIGN UP</router-link
			>
			<router-link
				:to="{ name: 'UserProfile', params: { user_id } }"
				style="text-decoration: none; color: inherit"
			>
				<div v-show="$store.state.tokenFound" class="logged-in-user">
					<h3>{{ username }}</h3>
				</div>
			</router-link>
			<button
				v-show="$store.state.tokenFound"
				@click="logout"
				class="logout-btn"
			>
				Log Out
			</button>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import router from '../../router/index';
import Searchbar from '../Searchbar/Searchbar.vue';
export default {
	data() {
		return {
			username: '',
			user_id: '.',
			theme: 'light',
		};
	},
	mounted() {
		if (this.$store.state.tokenFound) {
			axios
				.get('http://localhost:3000/api/users/login', {
					headers: { token: this.$store.state.tokenFound },
				})
				.then(res => {
					this.username = res.data.user.username;
					this.user_id = res.data.user.id;
				})
				.catch(err => {
					console.log(err);
				});
		}
	},
	methods: {
		logout() {
			this.$store.commit('changeJwt', null);
			this.$store.commit('addCurrentUser', null);
			router.push('/').catch(err => {
				//IF CURRENTLY ON '/', DON'T SHOW REDUNTANT NAVIGATION ERROR
				if (this.$route.path === '/') {
					return;
				}
				console.log(err);
			});
		},
		toggleMode() {
			if (this.theme === 'light') {
				document.documentElement.setAttribute('data-theme', 'dark');
				this.theme = 'dark';
			} else if (this.theme === 'dark') {
				document.documentElement.setAttribute('data-theme', 'light');
				this.theme = 'light';
			}
		},
	},
	components: { Searchbar },
};
</script>

<style>
@import './Header.css';
</style>
