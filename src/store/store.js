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
	},
});
