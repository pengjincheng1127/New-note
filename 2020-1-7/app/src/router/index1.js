import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about/:uname/id/:id',
    // name: 'about',
    //延迟加载
    component: () => import( '../views/About.vue')
  },
  {
    path: '/login',
    //延迟加载
    component: () => import( '../views/login.vue')
  },

  {
    path: '/public/',
    //延迟加载
    component: () => import( '../views/public.vue'),
    children:[
      { 
        path:'p1', // /public/p1 不要加 / 不然不匹配
        component:() =>import('../views/p1.vue')
      },
      { 
        path:'p2', // /public/p1 不要加 / 不然不匹配
        component:() =>import('../views/p2.vue')
      },
      //如果进入/public 下没有指定的children，默认添加一个组件可以在path上写个''
      { 
        path:'', // /public/p1 不要加 / 不然不匹配
        component:() =>import('../views/p3.vue')
      }
    ]
  },
  {
    path:'/p4',
    name:'/p4',
    props:true,
    component:() =>import('../views/p4.vue')
  },
  {
    path:'/p5',
    name:'/p5',
    //当作一个传递数据的钩子
    props:(route)=>({
      n:route.params.nn
    }),
    component:() =>import('../views/p5.vue')
  },
  {
    path:'/p6',
    redirects:to=>{
      return '/p4'
    }
  },
  {
    path:'*',
    component:()=>import('../views/404.vue')
  }


]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
