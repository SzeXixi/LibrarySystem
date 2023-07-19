import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
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
  {
    path: '/',
    redirect:'/dept',
    component: () => import('../views/tias/DeptView.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
