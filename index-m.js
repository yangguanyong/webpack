import "babel-polyfill"
import Vue from 'vue'
import App from './pages/entry/main-m.vue'
import router from './route-m'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

var app = new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router
})