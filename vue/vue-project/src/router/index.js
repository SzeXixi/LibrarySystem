import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  /* {
    path: '/register',
    name: 'register',
    component: () => import( '../views/RegisterView')
  }, */
  {
    path: '/',
    redirect:'/login',
    component: () => import('../views/LoginView.vue')
  },
  //登入页
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/LoginView.vue')
  },
  // 主页
  {
    path: '/main',
    name: 'main',
    component: () => import( '../views/MainView.vue')
  },
  {
    path: '/emp',
    name: 'emp',
    component: () => import('../views/tias/EmpView.vue')
  },
  {
    path: '/dept',
    name: 'dept',
    component: () => import( '../views/tias/DeptView.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
