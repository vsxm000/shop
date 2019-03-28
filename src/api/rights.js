/**
 * 权限的接口封装
 */
import request from '@/utils/request'

// 获取权限列表
export const getRightsList = type => request({
  method: 'GET',
  url: `/rights/${type}`
}).then(res => res.data)

// 获取当前用户菜单
export const getMenus = () => request({
  method: 'GET',
  url: '/menus'
}).then(res => res.data)
