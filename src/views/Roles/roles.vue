<!-- 角色列表 -->

<template>
  <div>
    <el-button type="primary" @click.prevent="$refs.addRolesEl.addFormVisible = true">添加角色</el-button>
  <el-table
    stripe
    border
    :data="roles"
    style="width: 100%">

    <!-- 展开行 -->
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <!-- 第一列 -->
          <el-row class="first" v-for="first in props.row.children" :key="first.id" >
            <el-col :span="4">
              <el-tag closable @close="handleDeleteRights(props.row, first)">{{ first.authName }}</el-tag>
            </el-col>

            <!-- 第二列 -->
            <el-col :span="20">
              <el-row class="second" v-for="second in first.children" :key="second.id" :gutter="20">
                <el-col :span="4">
                  <el-tag closable @close="handleDeleteRights(props.row, second)">{{ second.authName }}</el-tag>
                </el-col>

                <!-- 第三列 -->
              <el-col :span="20">
                <el-tag closable v-for="third in second.children" :key="third.id" @close="handleDeleteRights(props.row, third)">{{ third.authName }}</el-tag>
              </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-form>
      </template>
    </el-table-column>

    <el-table-column
      label="序号"
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      prop="roleName"
      label="角色名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="roleDesc"
      label="角色描述"
      width="500">
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-row>
          <el-button type="primary" icon="el-icon-edit" border size="mini" title="编辑"></el-button>
          <el-button type="danger" icon="el-icon-delete" border size="mini" title="删除"></el-button>
          <el-button type="success" icon="el-icon-check" border size="mini" title="授权角色列表" @click.prevent="$refs.roleRightsEl.showRoleRights(scope.row)"></el-button>
        </el-row>
      </template>
    </el-table-column>
  </el-table>

  <!-- 添加角色 -->
  <AddRoles ref="addRolesEl" @add-success="loadRights()"></AddRoles>
  <!-- /添加角色 -->

  <!-- 授权角色列表 -->
  <RoleRights ref="roleRightsEl" @edit-rights-success="loadRights"></RoleRights>
  <!-- /授权角色列表 -->
  </div>
</template>

<script>
import { getRoleList, rightsDelete } from '@/api/role'
import AddRoles from './add.vue'
import RoleRights from './role-right.vue'

export default {
  name: 'RoleList',
  data () {
    return {
      roles: []
    }
  },
  created () {
    this.loadRights()
  },
  methods: {
    async loadRights () {
      const { data } = await getRoleList()
      this.roles = data
      // const { data: dt } = await getRightsList('tree')
    },
    async handleDeleteRights (role, right) {
      const { data, meta } = await rightsDelete(role.id, right.id)
      if (meta.status === 200) {
        // 删除接口会返回该用户的最新的权限列表，我们可以直接把这个 data 赋值给当前角色的权限列表
        role.children = data
      }
    }
  },
  components: {
    AddRoles,
    RoleRights
  }
}
</script>

<style scoped>
.el-table{
  margin-top: 15px;
}
.first{
  margin-top: 5px;
}
.second{
  margin: 5px;
}
.third{
  margin-top: 10px;
}
</style>
