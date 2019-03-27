<template>
  <el-row class="header">
    <el-col :span="2">
      <img class="img" src="./1.jpg" alt="">
    </el-col>
    <el-col :span="16" class="middle">
      电商后台管理系统
    </el-col>
    <el-col :span="1" class="footer">
      <!-- <a href="">退出</a> -->
      <el-button type="primary" @click="handleLogout" size="mini">退出</el-button>
    </el-col>
  </el-row>

</template>

<script>
import { removeToken } from '@/utils/auth'

export default {
  name: 'AppHeader',
  data () {
    return {}
  },
  methods: {
    // 退出
    handleLogout () {
      this.$confirm('确认退出吗?', '退出提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => { // 确认
        // 1. 清空登录状态 token
        //  window.localStorage.removeItem('token')
        removeToken()
        // 2. 跳转到登录页
        this.$router.replace('/login')
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
      }).catch(() => { // 取消
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    }
  }
}
</script>

<style>
  .img{
    width:60px;
    height: 60px;
  }
  .header{
    width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    background-color: green;
  }
  .middle{
    display:flex;
    justify-content: center;
  }
</style>
