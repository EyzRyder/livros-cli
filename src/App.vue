<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: { Navbar },
};
</script>

<template>
  <main class="wrapper">
    <Navbar />
    <router-view></router-view>
  </main>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
}
</style>
