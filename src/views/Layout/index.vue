<template>

  <el-container>
    <el-header>
      <el-row class="header">
        <el-col :span="2">
          <img class="img" src="./1.jpg" alt="">
        </el-col>
        <el-col :span="16" class="middle">
          电商后台管理系统
        </el-col>
        <el-col :span="1" class="footer">
          <a href="">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <!-- 主题 -->
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <!-- 用户管理 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" class="el-icon-menu">
                <a href="#/user-list">用户列表</a>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 权限管理 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1" class="el-icon-menu">
                <a href="#/player">角色列表</a>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="2-2" class="el-icon-menu" >权限列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 商品管理 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1" class="el-icon-menu">商品列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="3-2" class="el-icon-menu">分类参数</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="3-3" class="el-icon-menu">商品分类</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 订单管理 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location" ></i>
              <span>订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" class="el-icon-menu">订单列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 数据统计 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location" ></i>
              <span>数据统计</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1" class="el-icon-menu">数据列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
export default {
  name:'Layout',
  data () {
    return {}
  },
  methods:{}
}
</script>

<style scoped>
  .img{
    width:100px;
    height: 100px;
  }
  .header{
    width: 100%;
    height: 100px;
    line-height: 100px;
    display: flex;
    justify-content:space-between;
    align-items: center;
  }
  .middle{
    display:flex;
    justify-content: center;
  }
  .el-container{
    height: 100%;
  }
  .el-aside {
    background-color: yellowgreen;
    height: 100%;
  }
  .el-main {
    width: 100%;
    background-color:skyblue;
    padding:0;
    margin: 0;
  }
  .el-menu{
    height: 100%;
  }
</style>
