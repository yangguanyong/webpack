<template>
  <div class="home">
    <button @click="goPerson">go person</button>
    <img class="icon" src="~@assets/fadada.png" alt="">
    <img class="icon" :src="imgSrc" alt="">
    <div class="icon-2"></div>
    <div>{{ ueditor }}</div>
    <div>data:{{data}}</div>
  </div>
</template>

<script>
import axios from 'axios'
var imgSrc = require('@assets/rmrb.jpg');
import ueditor from '@assets/ueditor/ueditor.js'
export default {
  data () {
    return {
      imgSrc,
      ueditor,
      data: ''
    }
  },
  mounted () {
    axios.get('/api/ddd').then(r => {
      this.data = r.data
    })
    axios.get('https://getman.cn/mock/ddd').then(r => {
      console.log(11, r)
    })
  },
  methods: {
    goPerson () {
      this.$router.push({
        path: 'person'
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import '~@assets/common.scss';
.home{
  width: 200px;
  height: 200px;
  border: 1px solid #e1e1e1;
  background: $main;
  .icon{
    width: 200px;
  }
  .icon-2{
    width: 200px;
    height: 50px;
    background: url('~@assets/rmrb.jpg');
  }
}
</style>