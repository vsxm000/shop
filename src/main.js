import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import './css/main.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import dayjs from 'dayjs'

// 注册全局组件
Vue.use(ElementUI)

// 注册全局过滤器
Vue.filter('dateFormat', function (value) {
  // 返回处理后的值
  return dayjs(value).format('YYYY-MM-DD HH:mm:ss')
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
