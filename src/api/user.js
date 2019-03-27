/**
 * 用户的相关接口畜栏里模块
 */
import request from '@/utils/request'

// 获取用户列表
export const getUserList = ({ pagenum = 1, pagesize = 100, query = '' }) => request({
  method: 'GET',
  url: '/users',
  // 传递get参数
  params: {
    pagenum,
    pagesize,
    // 用于模糊查询用户名
    query
  }
}).then(res => res.data)

// 添加用户
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

// 改变用户状态
export const changeState = (id, state) => request({
  method: 'PUT',
  url: `users/${id}/state/${state}/`
}).then(res => res.data)

// 删除用户
export const deleteById = id => request({
  method: 'DELETE',
  url: `/users/${id}`
}).then(res => res.data)

// 获取用户ID
export const getById = id => request({
  method: 'GET',
  url: `users/${id}`
}).then(res => res.data)

// 更新用户信息
export const updateUserInfo = (id, data) => request({
  method: 'PUT',
  url: `users/${id}`,
  data: {
    email: data.email,
    mobile: data.mobile
  }
}).then(res => res.data)

// 根据用户id，修改用户角色
export const updateUserRoleByUserId = (userId, roleId) => request({
  method: 'PUT',
  url: `users/${userId}/role`,
  data: {
    rid: roleId
  }
}).then(res => res.data)
