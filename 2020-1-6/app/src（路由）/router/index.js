import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'


import Home from '../components/home'
import About from '../components/about'
import Public from '../components/public'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component:About
   
  },
  {
    path:'/public',
    component:Public
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
