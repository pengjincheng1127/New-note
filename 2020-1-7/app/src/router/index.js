import Vue from 'vue'
import VueRouter from 'vue-router'

import BeforEach from '../components/beforeEach.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: BeforEach,
  
    },
    {
        path: '/b1',
        component: () => import('../components/b1.vue'),
        //记录
        beforeEnter: (to, from, next) => {
            if(from.fullPath === '/b2' && to.fullPath === '/b1'){
              next('/');
              alert('局部')
            }else{
              next();
            }
          }
    },
    {
        path:'/b2',
        component:()=> import('../components/b2.vue')
    },
    {
        path:'/foo/:id',
        component:()=> import('../components/foo.vue')
    },
    {
        path: '*',
        component: () => import('../views/404.vue')
    }

]

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes
})


router.beforeEach((to, from, next) => {
    console.log(to,from);
    if(from.fullPath === '/b2' && to.fullPath === '/b1'){
        alert('全局')
    }else{
        next();
    }
    next()
  });

export default router