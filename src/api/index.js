/**
 * 公共的接口封装
 * 我们不建议直接在每一个业务中去请求具体的请求路径
 * 建议把每一个请求封装一下
 *  1.如果接口变了,直接找到封装的位置修改即可
 *  2.可以重用
 *  3.便于维护
 */

import request from '@/utils/request'

export const login = data => request({
  method: 'POST',
  url: '/login',
  data: {
    username: data.username,
    password: data.password
  }
}).then(res => res.data)
