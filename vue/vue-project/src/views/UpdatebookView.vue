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
  <el-menu-item index="1" class="nav-item"><h1>录入图书</h1></el-menu-item>
  <el-menu-item index="2" class="nav-item"><h1>修改图书信息</h1></el-menu-item>
  <el-menu-item index="3" class="nav-item"><h1>删除图书</h1></el-menu-item>
</el-menu>
</el-header>
  <el-main><h1>请输入你要修改的图书索书号：</h1></el-main>
</el-container>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
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
    
</style>

