<template>
  <el-dialog title="分配角色" :visible.sync="roleFormVisible" width="40%" ref="roleFormEl">
  <el-form :model="roleForm" ref="roleFormEl">
    <el-form-item label="当前用户" label-width="80px" label-postion="left" size="mini" prop="username">
      <el-input v-model="roleForm.username" autocomplete="off" disabled></el-input>
    </el-form-item>
    <el-form-item label="角色" label-width="80px">
      <!-- el-select 会自动让 el-options 的 value 与 editForm.rid 相等的被选中 -->
      <!-- <tempalte slot-scope="scope">
          <el-option label="scope.row" value=""></el-option>
        </tempalte> -->
      <el-select v-model="roleForm.rid" placeholder="请选择">
        <el-option :value="-1" label="请选择"></el-option>
        <el-option
          v-for = "item in roles"
          :key = "item.id"
          :label = "item.roleName"
          :value = "item.id">
        </el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="roleFormVisible = false">取 消</el-button>
    <el-button type="primary" @click.prevent="handleEditRole">确 定</el-button>
  </div>
</el-dialog>
</template>

<script>
import { getById as getUserById, updateUserRoleByUserId } from '@/api/user'
import { getRoleList } from '@/api/role'

export default {
  name: 'EditRole',
  data () {
    return {
      roles: [],
      roleFormVisible: false,
      roleForm: {
        username: '',
        email: '',
        mobile: '',
        rid: 0
      }
    }
  },
  methods: {
    async showRoleEditDialog (item) {
      this.roleFormVisible = true
      const { data } = await getUserById(item.id)
      this.roleForm = data
      const { data: dt } = await getRoleList()
      this.roles = dt
    },
    async handleEditRole () {
      this.roleFormVisible = false
      const { id: userId, rid: roleId } = this.roleForm
      const { meta } = await updateUserRoleByUserId(userId, roleId)
      if (meta.status === 200) {
        this.$message({
          type: 'success',
          message: `${meta.msg}`
        })
      }
    }
  }
}
</script>
