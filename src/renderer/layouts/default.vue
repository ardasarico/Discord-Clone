<template>
  <div class="body">
    <Navigation />
    <Sidebar />
    <nuxt />
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
export default {
  name: "DefaultLayout",
  components: { Navigation, Sidebar },
};
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  align-items: center;
}
</style>
