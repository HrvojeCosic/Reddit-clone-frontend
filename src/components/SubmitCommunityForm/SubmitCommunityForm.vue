<template>
	<div>
		<div class="comm-modal" @click="$emit('close-community-modal')"></div>
		<div class="new-community-modal">
			<div class="comm-form-container">
				<div class="comm-title">
					<h2>Create a community</h2>
					<button class="close-button" @click="$emit('close-community-modal')">
						X
					</button>
				</div>
				<h3>Name</h3>
				<input type="text" class="comm-name" />
				<form>
					<h3>Description</h3>
					<textarea type="text" class="comm-description" />
				</form>
				<input type="submit" value="CREATE COMMUNITY" class="submit-comm" />
			</div>
		</div>
	</div>
</template>

<script></script>
<style>
@import './SubmitCommunityForm.css';
</style>
