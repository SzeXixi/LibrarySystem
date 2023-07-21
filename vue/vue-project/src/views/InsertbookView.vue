
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
  <el-main >
    <h1 id='tishi'>请输入图书信息！</h1>
    <br><br>
    <el-form ref="form" :model="form" label-width="80px" class="form-container" size="medium"> 
        <div class="form-row">
  <el-form-item label="索书号" class="form-item">
    <el-input v-model="form.no"></el-input>
  </el-form-item>
  <el-form-item label="书名" class="form-item">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  </div>
 <div class="form-row">
  <el-form-item label="作者" class="form-item">
    <el-input v-model="form.author"></el-input>
  </el-form-item>
  <el-form-item label="出版商" class="form-item"> 
    <el-input v-model="form.publisher"></el-input>
  </el-form-item>
   </div>
    <div class="form-row">
  <el-form-item label="ISBN" class="form-item">
    <el-input v-model="form.isbn"></el-input>
  </el-form-item>
  <el-form-item label="定价" class="form-item">
    <el-input  v-model="form.price"></el-input>
  </el-form-item>
   </div>
   <div class="form-row">
  <el-form-item label="内容简介" id="large-input">
    <el-input type="textarea" v-model="form.content" :rows="6" style="width: 300px; height: 200px;"></el-input>
  </el-form-item>
  </div>
  </el-form>
  <el-row class="button-container">
  <el-button round >提交</el-button>
  </el-row>
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
         form: {
            no: '',
            name: '',
            author:'',
            publisher:'',
            isbn:'',
            price:'',
            content:''
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
    #tishi {
        text-align: center; /* 将容器内文字水平居中 */
    }
    .form-container {
        display: flex;
        flex-direction: column; /* 垂直排列 */
        align-items: center; /* 居中对齐 */
    }
    .form-container .form-item {
     margin: 0; 
}
.form-row {
  display: flex;
  margin-bottom: 10px;
}

.form-row .form-item {
  flex: 1;
  margin-right: 10px; /* 设置表单项之间的右边距，可根据需要进行调整 */
}

.form-row .form-item:last-child {
  margin-right: 0; /* 最后一个表单项的右边距设为 0，防止多余的空白间距 */
}
.button-container {
    display: flex;
  justify-content: center;
   margin-top: -80px; /* 根据需要调整上边距的值 */
   margin-left: 80px; /* 根据需要调整左边距的值 */
}
.no-underline {
  text-decoration: none; /* 去除下划线 */
  color: inherit; /* 继承父元素的文字颜色 */
}
    
</style>
