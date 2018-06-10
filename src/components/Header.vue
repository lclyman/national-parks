<template>
  <div class="container">
    <span @click="loadParks">
      <router-link to="/" class="nav">National Parks</router-link>
    </span>
    <b-dropdown>
      <button class="button" slot="trigger">
          <span>Parks by state</span>
          <b-icon icon="menu-down"></b-icon>
      </button>
      <span v-for="(state, index) in states" :key="index">
          <b-dropdown-item @click="getParks(state)" selected>{{state}}</b-dropdown-item>
      </span>
  </b-dropdown>
  <hr class="top"/>
  </div>
</template>

<script>
import data from "../mixins/dataStates";
export default {
  mixins: [data],
  methods: {
    clearParks() {
      this.$store.dispatch("clearParks");
    },
    getParks(park) {
      this.$router.push("parks");
      if (park !== "Show all") {
        this.$store.dispatch("setParkState", park);
      } else {
        this.$store.dispatch("setParkState", "");
      }
    },
    loadParks() {
      this.$store.dispatch("setParkState", "");
    }
  }
};
</script>

<style scoped>
.cont {
  align-content: center;
}

.nav {
  margin-right: 40px;
  line-height: 40px;
}

.top {
  height: 1px;
  width: 100%;
  margin: 0 auto;
  margin-top: 15px;
  background: radial-gradient(
    ellipse at center,
    slategray 0%,
    rgba(0, 0, 0, 0) 75%
  );
}

.link {
  color: darkslategrey;
}

.link:hover {
  text-decoration: underline;
}
</style>
