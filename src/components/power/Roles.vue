<template>
  <div>
    <!-- 导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
        <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card>
        <!-- 添加角色按钮区域 -->
        <el-row>
            <el-col>
                <el-button type="primary" @click="roleDialogVisible=true">添加角色</el-button>
            </el-col>
        </el-row>
        <!-- 角色列表区域 -->
        <el-table :data="rolelist" border stripe>
            <!-- 展开列 -->
            <el-table-column type="expand">
                <template slot-scope="scope">
                    <el-row :class="['bdbottom',i1===0?'bdtop':'','vcenter']" 
                    v-for="(item1,i1) in scope.row.children" :key="item1.id">
                        <!-- 渲染一级权限 -->
                        <el-col :span="5">
                            <el-tag>{{item1.authName}}</el-tag>
                            <i class="el-icon-caret-right"></i>
                        </el-col>
                        <!-- 渲染二级三级权限 -->
                        <el-col :span="19">
                            <el-row :class="[i2===0?'':'bdtop','vcenter']" 
                            v-for="(item2,i2) in item1.children" :key="item2.id">
                                <el-col :span="6">
                                    <el-tag type="success">{{item2.authName}}</el-tag>
                                    <i class="el-icon-caret-right"></i>
                                </el-col>
                                <el-col :span="18">
                                    <el-tag type="warning" v-for="(item3) in item2.children" 
                                    :key="item3.id" closable disable-transitions @close="removeRightById(scope.row,item3.id)">
                                        {{item3.authName}}
                                    </el-tag>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </template>
            </el-table-column>
            <!-- 索引列 -->
            <el-table-column label="序号" type="index"></el-table-column>
            <el-table-column label="角色名称" prop="roleName"></el-table-column>
            <el-table-column label="角色描述" prop="roleDesc"></el-table-column>
            <el-table-column label="操作" width="300px">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary" icon="el-icon-edit" @click="showEditDialog(scope.row.id)">编辑</el-button>
                    <el-button size="mini" type="danger" icon="el-icon-delete" @click="removeRolesById(scope.row.id)">删除</el-button>
                    <el-button size="mini" type="warning" icon="el-icon-setting" @click="showSetRightDialog(scope.row)">分配权限</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 添加角色的的对话框 -->
        <el-dialog title="添加角色" :visible.sync="roleDialogVisible" width="50%" @close="roleDialogClosed">
            <!-- 内容主题区域 -->
            <el-form :model="roleForm" :rules="roleFormRules" ref="roleFormRef" label-width="70px">
                <el-form-item label="名称" prop="roleName">
                    <el-input v-model="roleForm.roleName"></el-input>
                </el-form-item>
                <el-form-item label="描述" prop="roleDesc">
                    <el-input v-model="roleForm.roleDesc"></el-input>
                </el-form-item>
            </el-form>
            <!-- 底部区域 -->
            <span slot="footer" class="dialog-footer">
                <el-button @click="roleDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addRole">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 修改角色的对话框 -->
        <el-dialog title="修改角色" :visible.sync="editDialogVisible" width="50%" @close="editDialogClosed">
            <!-- 内容主题区域 -->
            <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="70px">
                <el-form-item label="名称" prop="roleName">
                    <el-input v-model="editForm.roleName"></el-input>
                </el-form-item>
                <el-form-item label="描述" prop="roleDesc">
                    <el-input v-model="editForm.roleDesc"></el-input>
                </el-form-item>
            </el-form>
            <!-- 底部区域 -->
            <span slot="footer" class="dialog-footer">
                <el-button @click="editDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="editUser">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 分配权限的对话框 -->
        <el-dialog title="分配权限" :visible.sync="setRightDialogVisible" width="50%" @close="setRightDialogClosed">
            <!-- 树形控件 -->
            <el-tree :data="rightslist" :props="treeProps" show-checkbox node-key="id" 
            default-expand-all :default-checked-keys="defKeys" ref="treeRef"></el-tree>
            <span slot="footer" class="dialog-footer">
                <el-button @click="setRightDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="allotRights">确 定</el-button>
            </span>
        </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
    data()
    {
        return {
            //所有角色列表数据
            rolelist:[],
            roleDialogVisible:false,
            roleForm:
            {
                roleName:'',
                roleDesc:''
            },
            editDialogVisible:false,
            editForm:{},
            editFormRules:
            {
                roleName: 
                [
                    { required: true, message: '请输入角色名称', trigger: 'blur' }
                ],
                roleDesc: 
                [
                    { required: true, message: '请输入角色描述', trigger: 'blur' }
                ]
            },
            roleFormRules:
            {
                roleName: 
                [
                    { required: true, message: '请输入角色名称', trigger: 'blur' }
                ],
                roleDesc: 
                [
                    { required: true, message: '请输入角色描述', trigger: 'blur' }
                ]
            },
            //控制分配权限对话框的显示与隐藏
            setRightDialogVisible:false,
            //所有权限的数据
            rightslist:[],
            //树形控件的属性绑定对象
            treeProps:
            {
                label:'authName',
                children:'children'
            },
            //默认选中的节点id值数组
            defKeys:[],
            //当前即将分配权限的角色id
            roleId:''
        }
    },
    created()
    {
        this.getRolesList();
    },
    methods:
    {
        //获取所有角色的列表
        async getRolesList()
        {
            const {data:res}=await this.$https.get('roles');
            if(res.meta.status!==200)
            {
                this.$message.error('获取角色列表信息失败！');
            }
            this.rolelist=res.data;
        },
        roleDialogClosed()
        {
            this.$refs.roleFormRef.resetFields();
        },
        addRole()
        {
            this.$refs.roleFormRef.validate(async valid=>
            {
                const {data:res}=await this.$https.post('roles',this.roleForm);
                if(res.meta.status!==201)
                {
                    return this.$message.error('添加角色失败！');
                }
                else
                {
                    this.$message.success('添加角色成功！');
                    this.getRolesList();
                }
                this.roleDialogVisible=false;
            });
        },
        //根据id删除对应的权限
        async removeRightById(role,id)
        {
            //弹框提示用户是否要删除
            const confirmResult=await this.$confirm('此操作将永久删除该权限, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).catch(err=>err);
            if(confirmResult!=='confirm')
            {
                return this.$message.info('已取消删除');
            }
            const {data:res}=await this.$https.delete(`roles/${role.id}/rights/${id}`);
            if(res.meta.status!==200)
            {
                return this.$message.error('删除权限失败！');
            }
            // this.getRolesList();
            role.children=res.data;
        },
        async showEditDialog(id)
        {
            const {data:res}=await this.$https.get('roles/'+id);
            if(res.meta.status!==200)
            {
                return this.$message.error('获取角色失败！');
            }
            this.editForm=res.data;
            this.editDialogVisible=true;
        },
        editDialogClosed()
        {
            this.$refs.editFormRef.resetFields();
        },
        editUser()
        {
            this.$refs.editFormRef.validate(async valid=>
            {
                if(!valid)
                {
                    return;
                }
                const {data:res}=await this.$https.put('roles/'+this.editForm.roleId,
                {roleName:this.editForm.roleName,roleDesc:this.editForm.roleDesc});
                if(res.meta.status!==200)
                {
                    this.$message.error('修改角色失败！');
                }
                else
                {
                    this.$message.success('修改角色成功！');
                    this.getRolesList();
                }
                this.editDialogVisible=false;
            });
        },
        async removeRolesById(id)
        {
            const confirmResult=await this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).catch(err=>err);
            if(confirmResult!=='confirm')
            {
                return this.$message.info('已取消删除');
            }
            const {data:res}=await this.$https.delete('roles/'+id);
            if(res.meta.status!==200)
            {
                this.$message.error('删除角色失败！');
            }
            this.$message.success('删除角色成功！');
            this.getRolesList();
        },
        //显示分配权限的对话框
        async showSetRightDialog(role)
        {
            this.roleId=role.id;
            const {data:res}=await this.$https.get('rights/tree');
            if(res.meta.status!==200)
            {
                return this.$message.error('获取权限数据失败！');
            }
            this.rightslist=res.data;
            //递归获取三级节点的id
            this.getLeafKeys(role,this.defKeys);
            this.setRightDialogVisible=true;
        },
        //递归的形式获取角色下所有三级权限的id，保存到defkeys数组中
        getLeafKeys(node,arr)
        {
            //node节点不包含字节点说明是三级节点
            if(!node.children)
            {
                return arr.push(node.id);
            }
            node.children.forEach(item=>
            {
                this.getLeafKeys(item,arr);
            });
        },
        //监听分配权限对话框的关闭事件
        setRightDialogClosed()
        {
            this.defKeys=[];
        },
        //点击为角色分配权限
        async allotRights()
        {
            const keys=[...this.$refs.treeRef.getCheckedKeys(),...this.$refs.treeRef.getHalfCheckedKeys()];
            const idStr=keys.join(',');
            console.log(idStr);
            const {data:res}=await this.$https.post(`roles/${this.roleId}/rights`,{rids:idStr});
            if(res.meta.status!==200)
            {
                return this.$message.error('分配权限失败！');
            }
            this.$message.success('分配权限成功！');
            this.getRolesList();
            this.setRightDialogVisible=false;
        }
    }
}
</script>

<style lang="less" scoped>
.el-tag {
    margin: 7px;
}
.bdtop {
    border-top: 1px solid #eee;
}
.bdbottom {
    border-bottom: 1px solid #eee;
}
.vcenter {
    display: flex;
    align-items: center;
}
</style>