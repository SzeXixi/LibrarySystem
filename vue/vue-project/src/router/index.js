import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/LoginView.vue')
  },
  /* {
    path: '/register',
    name: 'register',
    component: () => import( '../views/RegisterView')
  }, */
  {
    path: '/',
    redirect:'/login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
