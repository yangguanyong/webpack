<template>
  <div class="personal">
    personal
    <button @click="goHome">home</button>
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
.personal{
  width: 200px;
  height: 200px;
  border: 1px solid #e1e1e1;
  background: lightpink;
}
</style>