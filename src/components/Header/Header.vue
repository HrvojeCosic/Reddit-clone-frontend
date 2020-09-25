<template>
	<div id="header">
		<div class="title">
			<img id="logo" src="../../../src/assets/logo.png" />
			<h1>RedditLight</h1>
		</div>
		<input class="search" placeholder="Search" />
		<div class="buttons-log-sign">
			<a href="" class="log-in-btn">LOG IN</a>
			<a href="" class="sign-up-btn">SIGN UP</a>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
#header {
	display: flex;
	position: sticky;
	top: 0;
	align-items: center;
	justify-content: space-between;
	height: 50px;
	width: 100%;
	background-color: #ffffff;
	border-bottom: 1px solid #edeff1;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
}
#logo {
	padding: 5px;
	width: 40px;
	-webkit-user-select: none;
	-moz-user-select: none;
}
.title {
	display: flex;
	align-items: center;
	cursor: pointer;
}
h1 {
	margin: 5px 0 0 10px;
}
.search {
	position: relative;
	padding: 0 35px;
	margin: 0 2% 0 7%;
	max-width: 740px;
	flex-grow: 1;
	height: 33px;
	border: 1px solid #edeff1;
	border-radius: 4px;
	outline-color: #d7dadc;
	font-size: 14px;
	background-color: #f6f7f8;
	background-image: url('https://www.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png');
	background-size: 30px;
	background-repeat: no-repeat;
}
.buttons-log-sign {
	display: flex;
	align-items: center;
	margin-right: 20px;
	font-weight: 600;
	font-size: 0.7em;
}
.sign-up-btn,
.log-in-btn {
	padding: 9px 30px;
	margin-left: 20px;
	border: 1px solid #0079d3;
	border-radius: 4px;
	text-decoration: none;
	background-color: #0079d3;
	color: #ffffff;
	border-radius: 4px;
}
.log-in-btn {
	background-color: #ffffff;
	color: #0079d3;
}
</style>
