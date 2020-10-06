import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/Views/Home.vue'

Vue.use(VueRouter)

const routes = [
	// {
	// 	path: '/',
	// 	redirect: `/o-nas`
	// },
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/oferta',
		name: 'Offer',
		component: () => import('@/Views/Offer')
	},
	{
		path: '/realizacje',
		name: 'Realizations',
		component: () => import('@/Views/Realizations')
	},
	{
		path: '/kontakt',
		name: 'Contact',
		component: () => import('@/Views/Contact')
	}
]

const router = new VueRouter({
	// mode: 'history',
	base: '/',
	routes
})

export default router
