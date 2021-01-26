<template>
  <div class="home">
    <nav class="navbar">
      <h1 class="top__track">The top tracks chart</h1>

      <ul>
    
        <li><router-link class="router" to="/search">Search</router-link></li>
      </ul>
    </nav>
<div class="container__track">
  <div v-for="track in tracks" :key="track.name" class="block__track">
      <img
        class="img"
        :src="track.image[3]['#text']"
        alt=""
      />
      <div class="description__block">
        <h1 class="track">{{track.name.substr(0,25)}}</h1>
        
        <router-link
                    class="router"
                    :data-artist="track.artist.name"
                    :to="{
                      name: 'About',
                      params: { id: track.artist.name },
                    }"
                  >
                  <p  class="artist"> Artist: {{track.artist.name}}</p>
                  
                  </router-link>
       
        <a class="link__artist" :href="track.artist.url" target="_blank">More about the artist</a>
      </div>
    </div>


</div>
    

  </div>
</template>

<script>
import About from "./About";
import { mapGetters } from "vuex";
export default {
  components: {
    name: "About",
    About,
  },
  beforeMount() {
    this.getData();
  },
  computed: mapGetters(["tracks"]),

  methods: {
    getData() {
      this.$store.dispatch("getTracks");
    },
  },
};
</script>

<style scoped>
@import url("../style/style.css");
</style>