import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
	plugins: [createPersistedState()],
	state: {
		tokenFound: null,
		currentUser: '',
		clickedPost: {},
		postsToShow: [],
		upvotedPosts: [],
		downvotedPosts: [],
	},
	mutations: {
		changeJwt(state, jwt) {
			this.state.tokenFound = jwt;
		},
		addCurrentUser(state, userEmail) {
			this.state.currentUser = userEmail;
		},
		changeClickedPost(state, clickedPost) {
			this.state.clickedPost = clickedPost;
		},
		changePostsToShow(state, newPosts) {
			this.state.postsToShow = newPosts;
		},
		pushNewPost(state, newPost) {
			state.postsToShow.push(newPost);
		},
		pushUpvotedPost(state, post) {
			if (!state.upvotedPosts.includes(post)) {
				state.upvotedPosts.push(post);
				console.log(state.upvotedPosts);
			}
		},
		pushDownvotedPost(state, post) {
			if (!state.downvotedPosts.includes(post)) {
				state.downvotedPosts.push(post);
				console.log(state.downvotedPosts);
			}
		},
		removeUpvotedPost(state, post) {
			const filtered = state.upvotedPosts.filter(upvotedPost => {
				return upvotedPost !== post;
			});
			state.upvotedPosts = filtered;
			console.log(state.upvotedPosts);
		},
		removeDownvotedPost(state, post) {
			const filtered = state.downvotedPosts.filter(downvotedPost => {
				return downvotedPost !== post;
			});
			state.downvotedPosts = filtered;
			console.log(state.downvotedPosts);
		},
	},
});
