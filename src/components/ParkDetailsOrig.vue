<template>
  <div class="card-content">
    <div >
    <div class="parkTitle" >
        <p class="title is-5">{{park.fullName}} - {{park.states}}</p>
      </div>
      <img :src= parkImage :alt=park.fullName>
    </div>
      <div class="cont">
        <p>
          {{park.description}} <br/><br/>
          {{park.weatherInfo}}<br/><br/>
          Current conditions: {{parkWeather.weather[0].description}}<br/>
          Current temp: {{getTempInFarenheit(parkWeather.main.temp)}}&deg;<br/>
          Humidty: {{parkWeather.main.humidity}}%<br/><br/>
          <a :href="park.directionsUrl" target="_blank"> Directions to {{park.fullName}}</a><br/>
          <a :href="park.url" target="_blank">Park Website</a>
        </p>
      </div>
    </div>
</template>

<script>
export default {
  async created() {
    await this.parkImage;
    await this.parkWeather;
  },
  mounted() {
    if (!this.park) {
      this.$router.push("/");
    }
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  },
  computed: {
    park() {
      return this.$store.getters.getLoadedPark;
    },
    parkImage() {
      return this.$store.getters.getLoadedParkImage;
    },
    parkWeather() {
      return this.$store.getters.getLoadedParkWeather;
    }
  },
  methods: {
    getTempInFarenheit(str) {
      return ((str - 273.15) * 1.8 + 32).toFixed(2);
    }
  }
};
</script>

<style scoped>
.parkTitle {
  margin-bottom: 20px;
}

img {
  margin-bottom: 20px;
}

.cont {
  display: inline-flex;
  text-align: left;
  width: 75%;
  padding: 10px;
}
</style>
