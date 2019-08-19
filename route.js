import VueRouter from 'vue-router'

const routes = [
  {
    path: '/home',
    component: () => import('./pages/home/main.vue')
  },
  {
    path: '/person',
    component: () => import('./pages/person/main.vue')
  }
]

var router = new VueRouter({
  mode: 'history',
  base: '/pc/',
  routes
})

export default router