
<template>
  <!-- 添加用户组件 -->
  <el-dialog title="添加用户" :visible.sync="addFormVisible" width="40%">
  <el-form :model="addFormData" label-position="left" ref="addFormEl" :rules="rules">
    <el-form-item label="用户名" label-width="80px" prop="username">
      <el-input v-model="addFormData.username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" label-width="80px" prop="password">
      <el-input v-model="addFormData.password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" label-width="80px" prop="email">
      <el-input v-model="addFormData.email" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="电话" label-width="80px" prop="mobile">
      <el-input v-model="addFormData.mobile" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="addFormVisible = false">取 消</el-button>
    <el-button type="primary" @click.prevent="submitForm()">确 定</el-button>
  </div>
</el-dialog>
</template>

<script>
import { addUser } from '@/api/user'

export default {
  name: 'AddUser',
  data () {
    return {
      searchText: '',
      addFormVisible: false,
      addFormData: {
        username: '',
        password: '',
        email: '',
        mobile: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'change' }
        ],
        mobile: [
          { required: true, message: '请输入电话', trigger: 'change' }
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
      const { meta } = await addUser(this.addFormData)
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
