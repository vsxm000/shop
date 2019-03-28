<template>
<el-menu
  default-active="2"
  class="el-menu-vertical-demo"
  @open="handleOpen"
  @close="handleClose"
  :router="true">
  <!-- 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
  <!-- 用户管理 -->
    <el-submenu :index="first.path" v-for="first in menus" :key="first.id">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{ first.authName }}</span>
      </template>
      <el-menu-item :index="`/${second.path}`" v-for="second in first.children" :key="second.id" class="el-icon-menu">
        <span>{{ second.authName }}</span>
      </el-menu-item>
     </el-submenu>
  <!-- 权限管理 -->
  <!-- <el-submenu index="2">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>权限管理</span>
    </template>
      <el-menu-item index="/roles" class="el-icon-menu">
        <span>角色列表</span>
      </el-menu-item>
      <el-menu-item index="/rights" class="el-icon-menu" >权限列表</el-menu-item>
  </el-submenu> -->
  <!-- 商品管理 -->
  <!-- <el-submenu index="3">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>商品管理</span>
    </template>
      <el-menu-item index="/goods" class="el-icon-menu">商品列表</el-menu-item>
      <el-menu-item index="3-2" class="el-icon-menu">分类参数</el-menu-item>
      <el-menu-item index="/categories" class="el-icon-menu">商品分类</el-menu-item>
  </el-submenu> -->
  <!-- 订单管理 -->
  <!-- <el-submenu index="4">
    <template slot="title">
      <i class="el-icon-location" ></i>
      <span>订单管理</span>
    </template>
      <el-menu-item index="/orders" class="el-icon-menu">订单列表</el-menu-item>
  </el-submenu> -->
  <!-- 数据统计 -->
  <!-- <el-submenu index="5">
    <template slot="title">
      <i class="el-icon-location" ></i>
      <span>数据统计</span>
    </template>
      <el-menu-item index="5-1" class="el-icon-menu">数据列表</el-menu-item>
  </el-submenu> -->
</el-menu>
</template>

<script>
import { getMenus } from '@/api/rights'
export default {
  name: 'NavMenu',
  data () {
    return {
      menus: []
    }
  },
  async created () {
    this.getRightsMenu()
  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    },
    async getRightsMenu () {
      const {data, meta} = await getMenus()
      if (meta.status === 200) {
        this.menus = data
      }
    }
  }
}
</script>

<style scoped>
  .el-menu{
    height: 100%;
  }

</style>
