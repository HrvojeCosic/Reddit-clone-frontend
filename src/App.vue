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
	--primary-text-color: #d7dadc;
	--secondary-text-color: #adadad;
	--logo-color: #ff5722;
}

#app {
	width: 100vw;
	height: 100vh;
	background-color: var(--background);
}
</style>
