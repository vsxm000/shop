import axios from 'axios'
import router from '@/router'

// axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'  // 不建议这样写,防止路径多变
const http = axios.create({
  baseURL: 'http://localhost:8888/api/private/v1/'
})

/**
 * axios 请求拦截器，所有的axios 发起的请求都会经过这里
 */
http.interceptors.request.use(function (config) {
  // 如果请求的路径不是login则给这个请求头添加token,验证是否登陆过

  if (config.url !== '/login') {
    config.headers.Authorization = window.localStorage.getItem('token')
  }
  return config
  // 请求通过的规则
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
http.interceptors.response.use(function (response) {
  if (response.data.meta.status === 401) {
    router.replace('/login')
  }
  return response
}, function (error) {
  return Promise.reject(error)
})

export default http
