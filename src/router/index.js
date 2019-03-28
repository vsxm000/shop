import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import User from '@/views/User'
import { getToken } from '@/utils/auth'
import Roles from '@/views/Roles'
import Rights from '@/views/Rights'
import Goods from '@/views/Goods'
import AddGoods from '@/views/Goods/add.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      children: [
        { path: '', component: Home },
        { path: '/users', component: User },
        { path: '/roles', component: Roles },
        { path: '/rights', component: Rights },
        { path: '/goods', component: Goods },
        { path: 'toadd', component: AddGoods }
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
  const token = getToken()
  // 如果没有登录则转到跳转页
  if (!token) {
    return next('/login')
  }
  next()
})

export default router
