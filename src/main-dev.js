import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//全局样式表
import './assets/css/global.css'
//字体图标
import './assets/fonts/iconfont.css'
import ZkTable from 'vue-table-with-tree-grid'
//导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
//导入富文本编辑器样式
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme
//配置axios
import axios from 'axios'
//导入进度条的js和css
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css' 
axios.defaults.baseURL = 'https://lianghj.top:8888/api/private/v1/';
//在拦截器里面显示和隐藏进度条
axios.interceptors.request.use((config)=>{
  Nprogress.start();
  config.headers.Authorization=window.sessionStorage.getItem('token');
  return config;
})
axios.interceptors.request.use((config)=>{
  Nprogress.done();
  return config;
})
Vue.prototype.$https=axios;
Vue.config.productionTip = false
Vue.component('tree-table', ZkTable)
//富文本编辑器注册为全局可用的组件
Vue.use(VueQuillEditor)
Vue.filter('dateFormat',function(val)
{
  const dt=new Date(val);
  const y=dt.getFullYear();
  const m=(dt.getMonth()+1+'').padStart(2,'0');
  const d=(dt.getDate()+'').padStart(2,'0');
  const hh=(dt.getHours()+'').padStart(2,'0');
  const mm=(dt.getMinutes()+'').padStart(2,'0');
  const ss=(dt.getSeconds()+'').padStart(2,'0');
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
