import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import axios from 'axios'
Vue.prototype.axios = axios;

import "../node_modules/swiper/css/swiper.css"
import "./assets/css/index.scss"


Vue.filter('setWH',(url , arg)=>{
  return url.replace(/w\.h/,arg);
});
//全局组件  引入
import Scroller from '@/components/Scroller'
Vue.component('Scroller' , Scroller);

import Loading from '@/components/Loading'
Vue.component('Loading',Loading);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
