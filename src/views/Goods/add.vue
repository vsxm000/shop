<template>
  <div>
    <div slot="header" class="clearfix">
      <el-row>添加商品信息</el-row>
    </div>
    <!-- 步骤条 -->
    <el-steps :active="active" finish-status="success">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
      <el-step title="步骤 4"></el-step>
      <el-step title="步骤 5"></el-step>
    </el-steps>

    <!-- Tab标签页 -->
    <el-tabs tab-position="left" style="height: 100%">
      <!-- 基本信息 -->
      <el-tab-pane label="基本信息">
        <!-- <div>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="是否促销">
              <el-radio-group v-model="form.resource">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </div> -->

      </el-tab-pane>

      <!-- 商品参数 -->
      <el-tab-pane label="商品参数">商品参数</el-tab-pane>

      <!-- 商品属性 -->
      <el-tab-pane label="商品属性">商品属性</el-tab-pane>

      <!-- 商品图片 -->
      <el-tab-pane label="商品图片">商品图片</el-tab-pane>

      <!-- 商品内容 -->
      <el-tab-pane label="商品内容">商品内容</el-tab-pane>
    </el-tabs>
    <!-- /Tab标签页 -->
  </div>
</template>

<script>
export default {
  name: 'AddGoods',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>

</style>
