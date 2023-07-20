<template >
  <div>
    <!-- 顶部区域 -->
    <el-container style="height: 740px; border: 1px solid #eee">
      <el-header style="font-size: 40px; background-color: rgb(238, 241, 246)"
        >图书管理系统</el-header
      >
      <!-- 侧边栏 -->
      <el-container >
        <el-aside width="230px" height="900px" style="border: 1px solid #eee;background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '3']">
        
              <el-menu-item >
                <router-link to="/dept">个人信息</router-link>
              </el-menu-item>
              <el-menu-item >
                <router-link to="/emp">我的借阅</router-link>
              </el-menu-item>
         
             <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>管理员权限</template>
        <el-menu-item-group>

          <el-menu-item index="2-1">用户管理</el-menu-item>
          <el-menu-item index="2-2">图书管理</el-menu-item>
        </el-menu-item-group>
    
      </el-submenu>
          </el-menu>
        </el-aside>

        <!-- 右边区域 -->
        <el-main
          style="position: relative; height: 550px;display: flex; flex-direction: column; align-items: center; "
        >
        <!-- 轮播图 -->
          <el-carousel indicator-position="outside"  style="height: 100%; width:100%;position: absolute; z-index: 1;">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
          <!-- 搜索框 -->
          <el-autocomplete
            v-model="state"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入内容"
            @select="handleSelect"
            style="
              width: 70%;
              text-align: center;
              margin-bottom: 20px;
              padding-top: 280px;
              position: absolute;
              z-index: 2;
            "
          >
          </el-autocomplete>
            <span style="position: absolute; z-index: 1;padding-top: 330px;">#条形码&nbsp;&nbsp;#书名&nbsp;&nbsp;  #作者</span>

          <span></span>
          <span></span>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      restaurants: [],
      state: "",
      timeout: null,
    };
  },
  methods: {
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号",
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113",
        },
        { value: "泷千家(天山西路店)", address: "天山西路438号" },
      ];
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    },
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
};
</script>

<style>
  .el-carousel__item h3 {
    height: 100%;
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #b7bf99;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
    /* background-image: url("C:\Users\sze_xixi\Desktop\MyLibrary\vue\vue-project\src\assets\img\mainimg1.jpg"); */
  }
</style>