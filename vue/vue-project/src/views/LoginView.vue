<template>
  <!-- 在模板中添加对应的 HTML 元素 -->
  <div>
  <div class="box">
    <!-- 滑动盒子 -->
    <div class="pre-box" :style="{ transform: preBoxTransform, backgroundColor: preBoxBackgroundColor }">
      <h1>WELCOME</h1>
      <p>JOIN US!</p>
      <div class="img-box" id="avatar">
        <img src="../assets/img/1.jpeg" alt="">
      </div>
    </div>
    <!-- 注册盒子 -->
    <div class="register-form"> 
      <!-- 标题盒子 -->
       <div class="title-box">
        <h1>注册</h1>
      </div>
      <!-- 输入框盒子 -->
      <div class="input-box">
        <input type="text" placeholder="用户名">
        <input type="password" placeholder="密码">
        <input type="password" placeholder="确认密码">
      </div> 
      <!-- 按钮盒子 -->
     <div class="btn-box">
        <button>注册</button>
      </div>
      <div class="text-box"> 
          <!-- 绑定点击事件 -->
          <p @click="mySwitch()">已有账号?去登录</p>
      </div>
       <!-- 管理员和普通用户的选项 -->
      <div class="select-container1">
        <el-radio v-model="radio1" label="1" >管理员</el-radio>
        <el-radio v-model="radio1" label="2">用户</el-radio>
      </div>
    </div>
 
    <!-- 登录盒子 -->
   <div class="login-form">
      <!-- 标题盒子 -->
      <div class="title-box">
        <h1>登录</h1>
      </div> 
      <!-- 输入框盒子 -->
       <div class="input-box">
        <input type="text" placeholder="用户名">
        <input type="password" placeholder="密码">
      </div> 
      <!-- 按钮盒子 -->
       <div class="btn-box">
        <button>
          <router-link to="/main"><a id="login">登录</a></router-link>
        </button>
      </div> 
      <div class="text-box"> 
          <!-- 绑定点击事件 -->
          <p @click="mySwitch()">没有账号?去注册</p>
      </div>
       <!-- 管理员和普通用户的选项 -->
      <div class="select-container2">
        <el-radio v-model="radio2" label="1">管理员</el-radio>
        <el-radio v-model="radio2" label="2">用户</el-radio>
      </div>
    </div> 
   
  </div>

  </div>
</template>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
export default {
    data () {
      return {
        radio1: '1',
        radio2: '1'
      };
    }
}
</script>
<script setup>
    import mySwitch from '../views/MySwitch'

</script>

<style >
    @import '../css/Login.css';
    .select-container1 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
    }
    .select-container2 {
      display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
    }
    
</style>
