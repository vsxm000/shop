/**
 * 用户的接口封装
 */
import request from '@/utils/request'

export const getUserList = ({ pagenum = 1, pagesize = 5 }) => request({
  method: 'GET',
  url: '/users',
  params: {
    pagenum,
    pagesize
  }
}).then(res => res.data)

export const addUser = ({ username, password, email, mobile }) => request({
  method: 'POST',
  url: '/users',
  data: {
    username,
    password,
    email,
    mobile
  }
}).then(res => res.data)
