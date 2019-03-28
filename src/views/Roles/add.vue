
<template>
  <!-- 添加用户组件 -->
  <el-dialog title="添加角色" :visible.sync="addFormVisible" width="40%">
  <el-form :model="addFormData" label-position="left" ref="addFormEl" :rules="rules">
    <el-form-item label="角色名称" label-width="80px" prop="roleName">
      <el-input v-model="addFormData.roleName" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="角色描述" label-width="80px" prop="roleDesc">
      <el-input v-model="addFormData.roleDesc" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="addFormVisible = false">取 消</el-button>
    <el-button type="primary" @click.prevent="submitForm()">确 定</el-button>
  </div>
</el-dialog>
</template>

<script>
import { addRolesList } from '@/api/role'

export default {
  name: 'AddRoles',
  data () {
    return {
      searchText: '',
      addFormVisible: false,
      addFormData: {
        roleName: '',
        roleDesc: ''
      },
      rules: {
        roleName: [
          { required: true, message: '请输入角色名称', trigger: 'blur' }
        ],
        roleDesc: [
          { required: true, message: '请输入角色描述', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (addFormEl) {
      this.$refs.addFormEl.validate(valid => {
        // 验证通过，提交表单
        if (!valid) {
          return
        }
        this.handleAdd()
      })
    },
    async handleAdd () {
      const { data, meta } = await addRolesList(this.addFormData)
      console.log(data)
      console.log(meta)
      if (meta.status === 201) {
        console.log(this.$refs.addFormEl)
        // 清空表单数据
        this.$refs.addFormEl.resetFields()
        // 隐藏对话框
        this.addFormVisible = false
        this.$emit('add-success')
      }
    }
  }
}
</script>

<style>

</style>
