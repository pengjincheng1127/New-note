import Vue from 'vue'
import VueRouter from 'vue-router'

import BeforEach from '../components/beforeEach.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: BeforEach,
        children: [{
                path: 'foo2',
                component: () => import('../components/foo2.vue'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'foo3',
                component: () => import('../components/foo3.vue'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'foo4',
                component: () => import('../components/foo4.vue'),
               
            }
        ]
    },
    {
        path: '/login',
        component: () => import('../components/login.vue')
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

let toPath = '';
router.beforeEach((to, from, next) => {
    console.log(to);
    //需要进行登录验证
    if(to.matched.some(item=>item.meta.requiresAuth)){
    if(!localStorage.getItem('login')){
        next({
          path:'/login?topath='+to.path
        }); //没登录就到登录页
      }else{
        next(); 
      }
    }else{
      //不需要登录验证
      next();
      
    }
  });

export default router