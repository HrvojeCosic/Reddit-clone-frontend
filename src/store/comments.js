import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default {
	state: {
		upvotedComments: [],
		downvotedComments: [],
	},
	mutations: {
		pushUpvotedComment(state, comment) {
			if (!state.upvotedComments.includes(comment)) {
				state.upvotedComments.push(comment);
				axios.put(`api/comments/comment/vote/${comment}`, {
					action: 'upvote',
				});
			}
		},
		pushDownvotedComment(state, comment) {
			if (!state.downvotedComments.includes(comment)) {
				state.downvotedComments.push(comment);
				axios.put(`api/comments/comment/vote/${comment}`, {
					action: 'downvote',
				});
			}
		},

		removeDownvotedComment(state, comment) {
			const filtered = state.downvotedComments.filter(downvotedComment => {
				return downvotedComment !== comment;
			});
			state.downvotedComments = filtered;
			axios.put(`api/comments/comment/vote/${comment}`, {
				action: 'upvote',
			});
		},
		removeUpvotedComment(state, comment) {
			const filtered = state.upvotedComments.filter(upvotedComment => {
				return upvotedComment !== comment;
			});
			state.upvotedComments = filtered;
			axios.put(`api/comments/comment/vote/${comment}`, {
				action: 'downvote',
			});
		},
	},
};
