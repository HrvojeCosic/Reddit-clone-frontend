import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import axios from 'axios';

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
				axios
					.put('http://localhost:3000/api/posts/votePost', {
						post,
						action: 'addVote',
					})
					.then(() => {
						//Update object in the state as well
						for (let i = 0; i < state.postsToShow.length; i++) {
							if (state.postsToShow[i]._id === post) {
								return (state.postsToShow[i].upvotes += 1);
							}
						}
					});
			}
		},
		pushDownvotedPost(state, post) {
			if (!state.downvotedPosts.includes(post)) {
				state.downvotedPosts.push(post);
				axios
					.put('http://localhost:3000/api/posts/votePost', {
						post,
						action: 'subtractVote',
					})
					.then(() => {
						//Update object in the state as well
						for (let i = 0; i < state.postsToShow.length; i++) {
							if (state.postsToShow[i]._id === post) {
								return (state.postsToShow[i].upvotes -= 1);
							}
						}
					});
			}
		},
		removeUpvotedPost(state, post) {
			const filtered = state.upvotedPosts.filter(upvotedPost => {
				return upvotedPost !== post;
			});
			state.upvotedPosts = filtered;
			axios
				.put('http://localhost:3000/api/posts/votePost', {
					post,
					action: 'subtractVote',
				})
				.then(() => {
					//Update object in the state as well
					for (let i = 0; i < state.postsToShow.length; i++) {
						if (state.postsToShow[i]._id === post) {
							return (state.postsToShow[i].upvotes -= 1);
						}
					}
				});
		},
		removeDownvotedPost(state, post) {
			const filtered = state.downvotedPosts.filter(downvotedPost => {
				return downvotedPost !== post;
			});
			state.downvotedPosts = filtered;
			axios
				.put('http://localhost:3000/api/posts/votePost', {
					post,
					action: 'addVote',
				})
				.then(() => {
					//Update object in the state as well
					for (let i = 0; i < state.postsToShow.length; i++) {
						if (state.postsToShow[i]._id === post) {
							return (state.postsToShow[i].upvotes += 1);
						}
					}
				});
		},
	},
});
