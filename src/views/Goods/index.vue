<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4">
        <!--
          el-input 是一个组件，无法直接监听原生的 click、keyup 等事件
          如果需要监听，则必须使用 .native 修饰符
          .native 修饰符监听组件根元素的原生事件

          注意：这里将 loadUsers 作为原生事件的处理函数，一定要记得手动调用传 1，第 1 页数据
          否则 loadUsers 的第1个参数就是事件源对象，把事件源对象当成页码去请求数据就是有问题的
         -->
        <el-input
          placeholder="请输入内容"
          v-model="searchText"
          @keyup.enter.native="loadGoodsList">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="$router.push('/toadd')">添加商品</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table
      :data="goods"
      stripe
      border
      style="width: 100%">
      <!-- 编号 -->
      <el-table-column
        type="index"
        label="编号"
        width="50">
      </el-table-column>
      <!-- 商品名称 -->
      <el-table-column
        prop="goods_name"
        label="商品名称"
        width="180">
      </el-table-column>
      <!-- 商品价格 -->
      <el-table-column
        prop="goods_price"
        label="商品价格"
        width="150">
      </el-table-column>
      <!-- 商品重量 -->
      <el-table-column
        prop="goods_weight"
        label="商品重量"
        width="150">
      </el-table-column>
      <!-- 创建时间 -->
      <el-table-column
        prop="add_time"
        label="创建时间"
        width="180" >
      <template slot-scope="scope">{{ scope.row.add_time | dateFormat }}</template>
      </el-table-column>
      <!-- 操作 -->
      <el-table-column
        label="操作">
        <el-button size="mini" type="primary" >编辑</el-button>
        <el-button size="mini" type="danger">删除</el-button>
        <el-button size="mini" type="warning">审核</el-button>
      </el-table-column>
    </el-table>
    <!-- /表格 -->

    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="pageSize"
      :total="total"
      @current-change="loadGoodsList">
    </el-pagination>
    <!-- /分页 -->
  </div>
</template>

<script>
// 引入模块
import { getGoodsList } from '@/api/goods'

export default {
  name: 'GoodsList',
  data () {
    return {
      goods: [],
      total: 0,
      searchText: '',
      pageSize: 20
    }
  },
  created () {
    this.loadGoodsList()
  },
  methods: {
    async loadGoodsList (page) {
      // 打印当前页码
      // console.log(page)
      const { data: dt } = await getGoodsList({ query: this.searchText, pagenum: page, pagesize: 20 })
      // console.log(dt)
      this.goods = dt.data.goods
      this.total = dt.data.total
    }
  }
}
</script>

<style>
.el-pagination{
  margin-top: 15px;
}
</style>
