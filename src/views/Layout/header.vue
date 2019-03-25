<template>
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

</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {}
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
