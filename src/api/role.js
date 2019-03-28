/**
 * 角色的接口封装
 */
import request from '@/utils/request'

// 获取角色列表
export const getRoleList = () => request({
  method: 'GET',
  url: '/roles'
}).then(res => res.data)

// 添加角色
export const addRolesList = ({ roleName, roleDesc }) => request({
  method: 'POST',
  url: '/roles',
  data: {
    roleName,
    roleDesc
  }
}).then(res => res.data)

// 根据ID查询角色
// export const getRoles = roleId => request({
//   method: 'GET',
//   url: `/role/${roleId}`
// }).then(res => res.data)

// 角色授权
export const roleRights = (roleId, rids) => request({
  method: 'POST',
  url: `/roles/${roleId}/rights`,
  data: {
    rids
  }
}).then(res => res.data)

// 删除角色授权
export const rightsDelete = (roleId, rightId) => request({
  method: 'DELETE',
  url: `/roles/${roleId}/rights/${rightId}`,
  data: {
    roleId,
    rightId
  }
}).then(res => res.data)
