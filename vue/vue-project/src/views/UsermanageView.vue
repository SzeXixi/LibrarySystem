<template>
<div>
   <el-table :data="tableData" border >
                <el-table-column prop="name" label="昵称" width="180"></el-table-column>
                <el-table-column prop="image" label="头像" width="180">
                      <template slot-scope="scope">
                       <img :src="scope.row.image" width="100px" height="70px">
                    </template>
                </el-table-column>
                <el-table-column prop="authority" label="权限" width="140">
                      <template slot-scope="scope">
                       {{scope.row.authority ==1?'管理员':'用户'}}
                    </template>
                </el-table-column>
                
                <el-table-column label="操作" >
                    <el-button type="primary" size="mini">编辑</el-button>
                    <el-button type="danger" size="mini">删除</el-button>
             </el-table-column>
            </el-table>
            <!-- 分页 -->
             <el-pagination
                background
                layout="total,prev, pager, next"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :total="1000"
                >
             </el-pagination>
             </div>
</template>
<script>

export default {
    data() {
        return {
             tableData:[],
    }
  }
 }
