import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import axios from 'axios';
import comments from './comments';

Vue.use(Vuex);

export default new Vuex.Store({
	plugins: [createPersistedState()],
	modules: {
		comments,
	},
	state: {
		darkMode: false,
		tokenFound: null,
		currentUser: '',
		clickedPost: {},
		postsToShow: [],
		upvotedPosts: [],
		downvotedPosts: [],
	},
	mutations: {
		toggleDarkMode(state) {
			state.darkMode = !state.darkMode;
		},
		changeJwt(state, jwt) {
			state.tokenFound = jwt;
		},
		addCurrentUser(state, userEmail) {
			state.currentUser = userEmail;
		},
		changeClickedPost(state, clickedPost) {
			state.clickedPost = clickedPost;
		},
		changePostsToShow(state, newPosts) {
			state.postsToShow = newPosts;
		},
		pushNewPost(state, newPost) {
			state.postsToShow.push(newPost);
		},
		pushUpvotedPost(state, post) {
			if (!state.upvotedPosts.includes(post)) {
				state.upvotedPosts.push(post);
				axios.put('api/posts/votePost', {
					post,
					action: 'addVote',
				});
			}
		},
		pushDownvotedPost(state, post) {
			if (!state.downvotedPosts.includes(post)) {
				state.downvotedPosts.push(post);
				axios.put('api/posts/votePost', {
					post,
					action: 'subtractVote',
				});
			}
		},
		removeUpvotedPost(state, post) {
			const filtered = state.upvotedPosts.filter(upvotedPost => {
				return upvotedPost !== post;
			});
			state.upvotedPosts = filtered;
			axios.put('api/posts/votePost', {
				post,
				action: 'subtractVote',
			});
		},
		removeDownvotedPost(state, post) {
			const filtered = state.downvotedPosts.filter(downvotedPost => {
				return downvotedPost !== post;
			});
			state.downvotedPosts = filtered;
			axios.put('api/posts/votePost', {
				post,
				action: 'addVote',
			});
		},
	},
});
