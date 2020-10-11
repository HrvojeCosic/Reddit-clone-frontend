<template>
	<div id="header">
		<router-link to="/" class="link">
			<div class="title">
				<img id="logo" src="../../../src/assets/logo.png" />
				<h1>RedditLight</h1>
			</div>
		</router-link>
		<Searchbar />
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
			<div v-show="$store.state.tokenFound" class="logged-in-user">
				<h3>{{ username }}</h3>
			</div>
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
	},
	components: { Searchbar },
};
</script>

<style scoped>
@import './Header.css';
.link {
	text-decoration: none;
	color: inherit;
}
</style>
