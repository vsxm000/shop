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
        <router-view></router-view>
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
</style>
