<template>
  <el-dialog title="授权角色" :visible.sync="dialogFormVisible">
    <!--
    tree 组件
    data 数据
    show-checkbox 是否显式复选框
    node-key 用来指定数据中唯一的标识字段
    default-expanded-keys 默认展开的节点 id
    default-checked-keys 默认选中的节点
    props
    node-key="id"  通过id选中必须设置的选项
    :default-expanded-keys="[2, 3, 4]"
    :default-checked-keys="[5]"
   -->
    <el-tree
    show-checkbox
    default-expand-all
    node-key="id"
    ref="tree"
    :data="rights"
    :default-checked-keys="defaultChecked"
    :props="defaultProps">
  </el-tree>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="handleSubmit()">确 定</el-button>
  </div>
</el-dialog>
</template>

<script>
import { getRightsList } from '@/api/rights'
import { roleRights} from '@/api/role'
export default {
  name: 'RoleRights',
  data () {
    return {
      dialogFormVisible: false,
      // 默认选中的节点 id 数组
      defaultChecked: [],
      rights: [],
      defaultProps: {
        children: 'children',
        label: 'authName'
      },
      role: {}
    }
  },
  methods: {
    // async showRoleRights (role) {
    //   this.dialogFormVisible = true
    //   const { data } = await getRightsList('tree')
    //   // console.log(data)
    //   this.rights = data
    //   let tmp = []
    //   this.rights.forEach(first => {
    //     // tmp.push(first.id)
    //     first.children.forEach(second => {
    //       // tmp.push(second.id)
    //       // 只需要三级节点的 id 就可以了，因为父级会根据子级自动选中
    //       second.children.forEach(third => {
    //         tmp.push(third.id)
    //       })
    //     })
    //   })
    //   this.defaultChecked = tmp
    // },
    // 分开写好维护
    showRoleRights (role) {
      this.role = role
      this.dialogFormVisible = true
      // console.log(role.children)
      // 让角色拥有的权限全部选中
      this.loadRights()
      this.getRights(role.children)
    },
    async loadRights () {
      const { data, meta } = await getRightsList('tree')
      if (meta.status === 200) {
        this.rights = data
      }
    },
    getRights (roleRights) {
      let tmp = []
      roleRights.forEach(first => {
        first.children.forEach(second => {
          second.children.forEach(third => tmp.push(third.id))
        })
      })
      this.defaultChecked = tmp
    },
    // async handleSubmit () {
    //   // 获取菜单树中用户选择的节点
    //   const tree = this.$refs.tree
    //   // console.log(tree.getCheckedKeys())  获取全选ID
    //   // console.log(tree.getHalfCheckedKeys())  获取半选ID
    //   const rids = [...tree.getCheckedKeys(), ...tree.getHalfCheckedKeys()].join(',')
    //   const { meta } = await roleRights(this.role.id,rids)
    //   console.log(meta)
    //   if (meta.status === 200) {
    //     this.$emit('edit-rights-success')
    //     this.dialogFormVisible = false
    //     this.$message({
    //       type: 'success',
    //       message: `${meta.msg}`
    //     })
    //   }
    // }
    async handleSubmit () {
      // 获取菜单树中用户选择的节点 id
      const tree = this.$refs.tree
      const rids = [...tree.getCheckedKeys(), ...tree.getHalfCheckedKeys()].join(',')
      const { meta } = await roleRights(this.role.id, rids)
      if (meta.status === 200) {
        this.$emit('edit-rights-success')
        this.dialogFormVisible = false
        this.$message({
          type: 'success',
          message: '授权成功'
        })
      }
    }
  }
}
</script>
