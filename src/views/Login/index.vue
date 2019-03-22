<template>
  <div class="login-wrap">
    <div class="login-container">
      <el-form :label-position="labelPosition" label-width="80px" :model="user" :rules="rules" ref="ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.prevent="submitForm('user')" class="login-btn">立即创建</el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name:'Login',
  data () {
    return {
      labelPosition: 'right',
      user:{
        username:'',
        password:'',
      },
      rules:{
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password:[
          { required: true, message: '请填写密码', trigger: 'change' }
        ]
      }
    }
  },
  methods:{
    async submitForm () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {  // 验证通过表单提交
          this.login()
        } else {
          return false;
        }
      })
    },
    async login () {
      const { data } = await axios.post('http://localhost:8888/api/private/v1/login',this.user)
      const meta = data.meta
      if(meta.status === 200){
        alert(meta.msg)
        this.$router.replace('/')
      }else{
        alert(meta.msg)
        this.user.username = ''
        this.user.password = ''
      }
    }
  }
}
</script>

<style scoped>
  .login-wrap{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login-container{
    width:500px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aqua;
    border-radius: 10px;
  }
  .login-btn{
    width: 100%;
  }

</style>
