<template>
<div class="box-card">
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
          @keyup.enter.native="loadUsers()">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="$refs.addUserEl.addFormVisible = true">添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 卡片内容 -->
    <!--
      表格组件
   data 是表格的数据
   stripe 斑马纹
   el-table-column 表格列组件
     你只需要设计表格列：列名+列值
     label 列名
     prop 数据名
     width 列宽，默认 px
   它内部会自动去遍历 data 数据，循环生成表格列
   添加用户对话框
   title 对话框标题
   visible 布尔值，对话框是否显示
   v-loading 是 element-ui 扩展的一个自定义指令，用于添加 loading 加载效果
     -->
    <el-table
      :data="users"
      stripe
      border
      v-loading="tableLoading"
      style="width: 100%">
      <el-table-column
        type="index">
      </el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="电话">
      </el-table-column>
      <!-- 用户状态 -->
      <el-table-column label="用户状态">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.mg_state"
            @change="handleChangeState(scope.row)"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </template>
      </el-table-column>
      <!-- 操作 -->
      <!-- 1. 自定义内容写到 <template slot-scope="scope"></template>
         slot-scope 是固定的属性
         值 "scope" 是随便起的一个名字
         在 template 中，scope.row 用于获取当前遍历项（item）
         scope.$index 就是遍历的索引 -->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-row>
          <el-button type="primary" icon="el-icon-edit" border title="编辑用户" size="mini"  @click='$refs.editFormEl.showEditDialog(scope.row)'></el-button>
          <el-button type="danger" icon="el-icon-delete" border title="删除用户" size="mini" @click='handleDelete(scope.row)'></el-button>
          <el-button type="success" icon="el-icon-check" border title="分配角色" size="mini" @click='$refs.roleFormEl.showRoleEditDialog(scope.row)'></el-button>
        </el-row>
        </template>
      </el-table-column>
    </el-table>
  </el-card>

  <!-- 添加用户对话框 -->
  <AddUser ref="addUserEl" v-on:add-success="loadUsers()"></AddUser>
  <!-- /添加对话框 -->

  <!-- 添加用户编辑对话框 -->
  <EditUser ref="editFormEl" v-on:edit-success="loadUsers()"></EditUser>
  <!-- /添加用户编辑对话框 -->

  <!-- 添加分类角色 -->
  <EditRole ref="roleFormEl"></EditRole>
  <!-- /添加分类角色 -->

  <!-- 添加分页 -->
    <!--
      分页组件 el-pagination
      background 带有背景色
      layout 分页结构，prev 显示上一页，pager next 下一页
      total 数据总条数
      默认按照 10 条每页进行分页
      current-change 页码改变会触发该事件
    -->
    <!-- <el-pagination
      background
      layout="prev, pager, next"
      @current-change="loadUsers"
      :page-size="5"
      :total="total">
    </el-pagination> -->
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="loadUsers"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 30]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>

  <!-- /添加分页 -->
</div>
</template>

<script>
import { getUserList, changeState, deleteById } from '@/api/user'
import AddUser from './add.vue'
import EditUser from './edit.vue'
import EditRole from './edit-role.vue'
export default {
  name: 'UserList',
  data () {
    return {
      searchText: '',
      users: [],
      tableLoading: true,
      value: true,
      total: 0,
      currentPage: 1,
      num:5
    }
  },
  async created () {
    console.log('2.token存在，进入了具体的业务组件')
    // 除了登录接口，其他接口都需要身份令牌才能访问
    // 所有需要授权(提供token)的接口都需要
    // const { data } = await getUserList({pagesize: 1})
    this.loadUsers()
  },
  methods: {
    // 加载用户列表
    async loadUsers (page) {
      const pageSize = this.num
      const { data } = await getUserList({ pagenum: page, pagesize: pageSize, query: this.searchText })
      this.users = data.users
      this.total = data.total
      this.tableLoading = false
    },
    // 更新用户列表
    async handleChangeState (item) {
      const { meta, data } = await changeState(item.id, item.mg_state)
      console.log(meta)
      if (meta.status === 200) {
        this.$message({
          type: 'success',
          // mg_state 的值为0或者1，故用三元表达式
          message: `${data.mg_state ? '启用' : '🈲用'}用户状态成功`
        })
      }
    },
    // 删除单个用户
    async handleDelete (item) {
      this.$confirm('确认删除吗？', '删除提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        // 确认
        const { meta } = await deleteById(item.id)
        if (meta.status === 200) {
          this.$message({
            type: 'success',
            message: '删除成功！'
          })
          this.loadUsers()
        }
      }).catch((err) => { // 取消
        console.log(err)
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`);
      this.num = `${val}`
      this.loadUsers()
    }
  },
  components: {
    AddUser,
    EditUser,
    EditRole
  }
}
</script>

<style scoped>
/* .el-table{
  margin-top: 15px;
} */
</style>
