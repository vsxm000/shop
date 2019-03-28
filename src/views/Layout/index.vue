<template>
  <el-container>
    <el-header>
      <AppHeader></AppHeader>
    </el-header>
    <!-- 主题 -->
    <el-container>
      <el-aside width="200px">
        <!-- 导航组件 -->
        <NavMenu></NavMenu>
      </el-aside>
      <el-main>
        <el-card class="box-card">
          <!-- 卡片头部 -->
          <div slot="header" class="clearfix">
            <!-- 面包屑路径导航组件 -->
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>用户管理</el-breadcrumb-item>
              <el-breadcrumb-item>用户列表</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <!-- layout的子组件在这里展示 -->
          <router-view></router-view>
        </el-card>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import AppHeader from './header.vue'
import NavMenu from './navmenu.vue'

export default {
  name: 'Layout',
  data () {
    return {}
  },
  components: { AppHeader, NavMenu }
}
</script>

<style scoped>
.el-header{
  padding:0;
}
.el-container{
  height: 100%;
}
.el-aside {
  height: 100%;
}
.el-main {
  width: 100%;
  padding:0;
  margin: 0;
}
.el-card{
  min-height: 100%;
}
</style>
