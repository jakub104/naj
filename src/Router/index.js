import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/Views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/Views/About.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: '/',
  routes
})

export default router
