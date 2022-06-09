import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import Welcome from '../components/Welcome.vue';
import MobileLogin from '../components/MobileLogin.vue';
import Login from '../components/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../components/Profile.vue')
  },
  {
    path: '/notification',
    name: 'Notification',
    component: () => import(/* webpackChunkName: "about" */ '../components/Notification.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
