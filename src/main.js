//引入vue模块
import Vue from 'vue'
//引入路由模块
import VueRouter from 'vue-router'
//引入app组件根节点
import App from './App.vue'
//引入路由
import index from './components/index.vue';
import news from './components/news.vue';
import miaosha from './components/miaosha.vue';
import shopping from './components/shopping.vue';

//引入CSS
import './assets/statics/site/css/style.css';

//路由中间件
Vue.use(VueRouter)
//定义路由规则
const router = new VueRouter({
    routes: [
      {path:'/index',component:index},
      {path:'/news',component:news},
      {path:'/miaosha',component:miaosha},
      {path:'/shopping',component:shopping},
    ]
})
Vue.config.productionTip = false

new Vue({
  el:"#app",
  //渲染APP组件
  render: h => h(App),
  //挂载路由规则
   router
}).$mount('#app')
