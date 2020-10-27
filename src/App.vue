<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {};
</script>

<style>
@import './reset.css';
:root[data-theme='light'] {
	--primary: #fff;
	--secondary: #f6f7f8;
	--background: #dae0e6;
	--border-color: #dae0e6;
	--post-border-color: #cccccc;
	--create-post-border-color: #0079d3;
	--primary-text-color: #000;
	--secondary-text-color: #5a5a5a;
	--logo-color: #ff5722;
}
:root[data-theme='dark'] {
	--primary: #1a1a1b;
	--secondary: #161617;
	--background: #030303;
	--border-color: #3d3d3d;
	--post-border-color: #3a3a3a;
	--create-post-border-color: #dad6d6;
	--primary-text-color: #d7dadc;
	--secondary-text-color: #adadad;
	--logo-color: #eb5629;
}
.loader {
	margin: 30px auto;
	border-radius: 50%;
	border-top: 2px solid var(--primary-text-color);
	width: 30px;
	height: 30px;
	-webkit-animation: spin 2s linear infinite;
	animation: spin 2s linear infinite;
}
@-webkit-keyframes spin {
	0% {
		-webkit-transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
	}
}
@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
#app {
	width: 100vw;
	height: 100vh;
	background-color: var(--background);
}
</style>
