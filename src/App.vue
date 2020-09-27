<template>
	<div id="app">
		<Header />
		<MainPage />
		<!-- <router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> -->
	</div>
	<!-- <router-view /> -->
</template>

<script>
import Header from './components/Header/Header.vue';
import MainPage from './components/MainPage.vue';
export default {
	components: { Header, MainPage },
};
</script>

<style scoped>
@import './reset.css';
#app {
	width: 100vw;
	height: 100vh;
	background-color: #dae0e6;
}
</style>
