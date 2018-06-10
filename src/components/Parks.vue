<template>
  <div class="container">
    <h1 class="title is-5">{{strTitle}} {{parksLoc}}  <br/><span class="details"> (Click on park for more details)</span></h1>
    <main class="thumbs">
        <ul v-for="park in parks" :key="park.id">
          <li @click="loadPark(park)">
            {{editName(park.name)}}
            <img :src="park.thumb" :alt="park.name" class="image">
          </li>
        </ul>
    </main>
  </div>
</template>

<script>
import { db } from "../main";

export default {
  async created() {
    await this.parks;
  },
  data() {
    return {
      strTitle: "US National Parks",
      locations: [],
      name: "",
      image: ""
    };
  },
  computed: {
    parks() {
      return this.$store.getters.getParks;
    },
    parksLoc() {
      if (this.$store.getters.getParkState !== "") {
        this.strTitle = "National Parks";
        return "in " + this.$store.getters.getParkState;
      } else {
        this.strTitle = "US National Parks";
      }
    }
  },
  methods: {
    editName(str) {
      let replacementStr = str.replace("National Park", "");
      return replacementStr;
    },
    loadPark(item) {
      const objPark = {
        parkCode: item.parkCode,
        image: item.image
      };
      this.$store.dispatch("loadPark", objPark);
    }
  }
};
</script>

<style scoped>
.thumbs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  padding: 10px;
  margin: 20px;
  background-color: black;
  color: white;
}

li {
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  line-height: 25px;
  white-space: nowrap;
}

h1 {
  margin-top: 20px;
}

.details {
  font-style: italic;
  font-size: 14px;
}

.image {
  height: 90px;
  width: 125px;
}
</style>
