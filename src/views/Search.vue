<template>
  <div class="search">
    <nav class="navbar">
      <h1 class="top__track">The top tracks chart</h1>
      <ul>
        <li><router-link class="router" to="/">Home</router-link></li>
      </ul>
    </nav>

    <form v-on:submit.prevent="handleSubmit" class="form" action="">
      <input v-model="valueInput" type="text" />
      <button class="btn" type="submit">Search</button>
    </form>
    <div v-if="search" class="container__track">
      <div
        class="block__track search__width"
        v-for="el in search.track"
        :key="el.listeners"
      >
        <div class="description__block">
          <a class="link__artist" :href="el.url">
            <h1 class="track">{{ el.name }}</h1></a
          >

          <p class="artist">Artist: {{ el.artist }}</p>
        </div>
      </div>
    </div>
    <h1 class="v__else" v-else>Search result will be shown here</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      valueInput: "",
    };
  },
  computed: mapGetters(["search"]),

  methods: {
    ...mapActions(["getSearch"]),
    handleSubmit() {
      this.getSearch(this.valueInput);
      this.valueInput = "";
    },
  },
};
</script>