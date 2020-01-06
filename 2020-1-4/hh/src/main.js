import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false;

const routes = [
  
];

const router = new VueRouter({
      routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
