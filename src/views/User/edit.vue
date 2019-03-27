<template>
  <el-dialog title="编辑用户" :visible.sync="editFormVisible" >
  <el-form :model="editForm" ref="editFormEl" :rules="rules">
    <el-form-item label="用户名" label-width="80px" prop="username">
      <el-input v-model="editForm.username" autocomplete="off" disabled></el-input>
    </el-form-item>
    <el-form-item label="邮箱" label-width="80px" prop="email">
      <el-input v-model="editForm.email" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="电话" label-width="80px" prop="mobile">
      <el-input v-model="editForm.mobile" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="editFormVisible = false">取 消</el-button>
    <el-button type="primary" @click.prevent="submitForm('editFormEl')">确 定</el-button>
  </div>
</el-dialog>
</template>

<script>
import { getById as getUserId, updateUserInfo } from '@/api/user'

export default {
  name: 'EditUser',
  data () {
    return {
      editFormVisible: false,
      editForm: {
        username: '',
        eamil: '',
        mobile: ''
      },
      rules: {
        email: [
          { required: true, message: '请填写邮箱', trigger: 'change' }
        ],
        mobile: [
          { required: true, message: '请填写电话', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.editFormEl.validate(valid => {
        // 验证通过，提交表单
        if (!valid) {
          return
        }
        this.handleEdit()
      })
    },
    async handleEdit () {
      const { id, email, mobile } = this.editForm
      const { meta, data } = await updateUserInfo(id, {
        email,
        mobile
      })
      console.log(data)
      if (meta.status === 200) {
        this.$emit('edit-success')
        this.$message({
          type: 'success',
          message: '更新成功'
        })
        this.editFormVisible = false
      }
    },
    async showEditDialog (item) {
      // this.editFormVisible = true
      const { meta, data } = await getUserId(item.id)
      if (meta.status === 200) {
        // console.log(this.$refs.editFormEl)
        // 显示对话框
        this.editFormVisible = true
        this.editForm = data
      }
    }
  }
}
</script>
