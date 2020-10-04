import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../components/MainPage.vue';
import LogInPage from '../components/LogInPage/LogInPage.vue';
import SignUpPage from '../components/SignUpPage/SignUpPage.vue';
import Header from '../components/Header/Header.vue';
import SubmitPostForm from '../components/SubmitPostForm/SubmitPostForm.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'MainPage',
		component: MainPage,
		Header,
	},
	{
		path: '/log-in',
		name: 'LogInPage',
		component: LogInPage,
	},
	{
		path: '/sign-up',
		name: 'SignUpPage',
		component: SignUpPage,
	},
	{
		path: '/submit',
		name: 'SubmitPostForm',
		component: SubmitPostForm,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
