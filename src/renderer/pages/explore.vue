<template>
  <div class="container">
    <nuxt-child />
  </div>
</template>

<script>
export default {
  name: "explore",
};
</script>

<style lang="scss" scoped>
.container {
  width: calc(100% - 64px);
  margin: 0 32px;
  height: 100vh;
  position: relative;
}
</style>
