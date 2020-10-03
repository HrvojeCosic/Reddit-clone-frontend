import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		tokenFound: null,
	},
	mutations: {
		changeJwt(jwt) {
			this.state.tokenFound = jwt;
		},
	},
});
