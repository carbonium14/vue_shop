import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//全局样式表
import './assets/css/global.css'
//字体图标
import './assets/fonts/iconfont.css'
import ZkTable from 'vue-table-with-tree-grid'

//配置axios
import axios from 'axios'
axios.defaults.baseURL = 'https://lianghj.top:8888/api/private/v1/';
axios.interceptors.request.use((config)=>{
  config.headers.Authorization=window.sessionStorage.getItem('token');
  return config;
})
Vue.prototype.$https=axios;
Vue.config.productionTip = false
Vue.component('tree-table', ZkTable)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
