<template>
    <div>
        <el-container >
  <el-header>
    <el-menu
  :default-active="activeIndex2"
  class="nav"
  mode="horizontal"
  @select="handleSelect"
  background-color="#c7c2bc"
  text-color="#fff"
  active-text-color="#ffd04b" >
 <el-menu-item index="1" class="nav-item" ><router-link to="/BookInsert" class="no-underline"><h1>录入图书</h1></router-link></el-menu-item>
  <el-menu-item index="2" class="nav-item"><router-link to="/BookUpdate" class="no-underline"><h1>修改图书信息</h1></router-link></el-menu-item>
  <el-menu-item index="3" class="nav-item"><router-link to="/BookDelete" class="no-underline"><h1>删除图书</h1></router-link></el-menu-item>
</el-menu>
</el-header>
  <el-main>
    <!-- 表单 -->
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="索书号">
            <el-input v-model="form.no" placeholder="索书号"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" @click="onSubmit" style="margin-top: 7px; margin-left: 7px">查询</el-button>
              </el-form-item>
            </el-form>

            <!-- 表格 -->
            <el-table :data="tableData" border >
                <el-table-column prop="no" label="索书号" width="180"></el-table-column>
                <el-table-column prop="image" label="图像" width="180">
                      <template slot-scope="scope">
                       <img :src="scope.row.image" width="100px" height="70px">
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="书名" width="180"></el-table-column>
                <el-table-column prop="author" label="作者" width="180"></el-table-column>
                <el-table-column prop="publisher" label="出版商" width="180"></el-table-column>
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
             </el-main>
</el-container>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        tableData:[],
        form:{
          no:''
        }
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
.nav {
    display: flex; /* 将导航栏容器设置为 Flex 容器 */
  align-items: center; /* 子元素垂直居中对齐 */
  
}
    .nav-item {
        flex: 1; /* 子元素自动平均分配导航栏宽度 */
  text-align: center; /* 文本居中对齐 */
  border: 1px solid #fcfcfc; /* 添加 1 像素宽度、黑色实线边框 */
    }
    .no-underline {
  text-decoration: none; /* 去除下划线 */
  color: inherit; /* 继承父元素的文字颜色 */
}
    
</style>

