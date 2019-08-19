import "babel-polyfill"
import Vue from 'vue'
import App from './pages/entry/main.vue'
import router from './route'
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