/**
 * 商品接口封装
 */
import request from '@/utils/request'

export const getGoodsList = ({ query = '', pagenum = 1, pagesize = 20 } = {}) => request({
  method: 'GET',
  url: '/goods',
  params: {
    query,
    pagenum,
    pagesize
  }
})
