<template>
  <div class="container is-fluid">
    <h2>Add New National Park</h2>

    <form @submit.prevent="addPark(name, image)">
      <section>
          <b-field label="Park Name">
              <b-input v-model="name"></b-input>
          </b-field>

          <b-field label="State where located">
              <b-input v-model="state"></b-input>
          </b-field>


          <b-field label="Description">
              <b-input maxlength="2000" v-model="description" type="textarea"></b-input>
          </b-field>

          <b-field label="Image URL">
              <b-input v-model="image"></b-input>
          </b-field>
      </section>
      <button type="submit" class="button is-primary">Add New Park</button>
    </form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      image: "",
      state: "",
      description: ""
    };
  },
  methods: {
    addPark(name, image) {
      const newPark = {
        name: this.name,
        image: this.image,
        state: this.state,
        description: this.description
      };

      this.$store.dispatch("addNewPark", newPark);
      this.name = "";
      this.image = "";
      this.state = "";
      this.description = "";
    }
  }
};
</script>

<style scoped>
form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
section {
  width: 50%;
}

button {
  margin-top: 30px;
}
</style>