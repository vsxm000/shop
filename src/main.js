import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import './css/main.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 注册全局组件
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
