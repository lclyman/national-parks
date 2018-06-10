<template>
  <div id="app" v-cloak>
    <div v-if="loading">
        <p class="title is-5">Loading...</p>
    </div>
    <div id="content" v-else>
      <app-header/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    appHeader: Header
  },
  computed: {
    loading() {
      return this.$store.getters.isLoading;
    }
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
