import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import User from '@/views/User'
import Player from '@/views/Player'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      children: [
        { path: '', component: Home },
        { path: '/user-list', component: User },
        { path: '/player', component: Player }
      ]
    }
  ]
})
