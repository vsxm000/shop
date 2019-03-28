<template>
  <div>
    <el-table
      :data="rights"
      style="width: 100%">
      <el-table-column
        type="index">
      </el-table-column>
      <el-table-column
        prop="authName"
        label="权限名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="path"
        label="路径"
        width="180">
      </el-table-column>
      <el-table-column
        label="层级">
        <!-- 循环显示 -->
        <template slot-scope="scope">
          {{ ['一层','二层','三层'][scope.row.level] }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getRightsList } from '@/api/rights'

export default {
  name: 'RightList',
  data () {
    return {
      rights: []
    }
  },
  created () {
    this.loadRightsList()
  },
  methods: {
    async loadRightsList () {
      const { data } = await getRightsList('list')
      this.rights = data
    }
  }
}
</script>

<style>
.el-table-column{
  line-height: 10px;
}
</style>
