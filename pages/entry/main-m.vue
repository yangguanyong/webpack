<template>
  <div>
    <div class="nav">nav-m</div>
    <button @click="goHome">goHome</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    goHome () {
      this.$router.push({
        path: 'home'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.nav{
  width: 100%;
  height: 50px;
  color: white;
  background: grey;
}
</style>