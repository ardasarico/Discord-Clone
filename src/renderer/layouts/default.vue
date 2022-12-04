<template>
  <div class="body">
    <Sidebar />
    <nuxt />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
export default {
  name: "DefaultLayout",
  components: { Sidebar },
};
</script>

<style lang="scss" scoped>
.body {
  display: flex;
}
</style>
