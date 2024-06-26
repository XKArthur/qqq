import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style/index.less'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 在Vue实例上扩展全局方法
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
