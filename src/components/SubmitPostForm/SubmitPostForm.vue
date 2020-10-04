<template>
	<div>
		<Header />
		<div class="form-container">
			<div class="header">
				<h2>Create a post</h2>
				<input type="text" placeholder="Choose a community" />
			</div>
			<form>
				<input type="text" placeholder="Title" />
				<input type="text" placeholder="Text (optional)" />
			</form>
			<div class="buttons-container">
				<input type="submit" value="CANCEL" />
				<input type="submit" value="POST" />
			</div>
		</div>
	</div>
</template>

<script>
import Header from '../../components/Header/Header.vue';
export default {
	components: {
		Header,
	},
};
</script>

<style scoped>
@import './SubmitPostForm.css';
</style>
