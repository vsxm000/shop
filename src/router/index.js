import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import User from '@/views/User'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      children: [
        { path: '', component: Home },
        { path: '/users', component: User }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('1.来这报道')
  // 如果路由路径是'/login',则放行通过
  if (to.path === '/login') {
    return next()
  }
  const token = window.localStorage.getItem('token')
  // 如果没有登录则转到跳转页
  if (!token) {
    return next('/login')
  }
  next()
})

export default router
