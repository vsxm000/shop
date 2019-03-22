<template>
  <div>
    <div class="header">首页>用户管理>用户列表</div>
    <div class="search">
      <input type="text" placeholder="请输入搜索内容">
      <a href="">添加用户</a>
    </div>
  </div>
</template>

<script>
export default {
  name:'user-list',
  data () {
    return {}
  },
}
</script>

<style scoped>
  .header{
    padding:10px;
    background-color: green;
    height: 50px;
    line-height: 50px;
  }
  .search input{
    border: none;
    outline-style: none;
    height: 30px;
    line-height: 30px;
    vertical-align:top;
  }
  .search a{
    padding: 5px;
    line-height: 30px;
    background-color: #fff;
    text-decoration: none;
  }
</style>
