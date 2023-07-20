<template>
  <!-- 在模板中添加对应的 HTML 元素 -->
  <div>
  <div class="box">
    <!-- 滑动盒子 -->
    <div class="pre-box" :style="{ transform: preBoxTransform, backgroundColor: preBoxBackgroundColor }">
      <h1>WELCOME</h1>
      <p>JOIN US!</p>
      <div class="img-box" id="avatar">
        <img src="../assets/img/1.jpg" alt="">
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
      <div class="btext-box"> 
        <!-- 绑定点击事件 -->
         <p @click="mySwitch()">已有账号?去登录</p>
      </div> 
      <!-- 管理员和普通用户的选项 -->
         <!-- <el-form-item class="form-box">
            <el-radio-group v-model="form.resource">
                <el-radio label="管理员"></el-radio>
                <el-radio label="用户"></el-radio>
            </el-radio-group>
        </el-form-item>  -->
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
       <div class="btext-box"> 
        <!-- 绑定点击事件 -->
        <p @click="mySwitch()">没有账号?去注册</p>
      </div>
    </div> 
  </div>
  </div>
</template>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script setup>
    import mySwitch from '../views/MySwitch'

</script>


<style >
    @import '../css/Login.css';
</style>
