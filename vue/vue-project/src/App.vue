<template>
  <div>
    <!-- <nav>
      <router-link to="/">vue Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view /> -->
    <!-- <element-view></element-view> -->

    <!-- <emp-view></emp-view> -->
    <!-- 动态展示标签 -->
    <router-view></router-view> 
    <!-- <login-view></login-view> -->
  </div>
</template>

<script>
// import EmpView from './views/tias/EmpView.vue';
//import ElementView from './views/element/ElementView.vue';
// import LoginView from './views/LoginView.vue';
export default {
  components: {/*LoginView*//*EmpView*/ /*ElementView*/ },
  data: function () {
    return {
      message: "hello vue", //数据模型
    };
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
