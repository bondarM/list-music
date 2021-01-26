<template>
  <div class="about">
    <nav class="navbar">
      <h1 class="top__track">About artist</h1>
      <ul>
        <li><router-link class="router" to="/"> Home</router-link></li>
        <li><router-link class="router" to="/search"> Search</router-link></li>
      </ul>
    </nav>

 <div v-for="artist in artist" :key="artist.name" class="block__trackExp">
   
   <div class="description__blockExp">
     <img class="" :src="artist.image[3]['#text']" alt="">
     <h1>{{artist.name}}</h1> <div class="d-flex" > <div :key="tag.name" v-for="tag in artist.tags.tag">#{{tag.name}} </div> </div>
     <p class="desc__about">{{artist.bio.content}}</p>
     <router-link class="router" to="/"> < Back</router-link>
   </div>
   
    
 </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data(){
    return{
      nameArtist:this.id
    }
  },
   mounted() {
    this.getArtist(this.id)

  },
  computed: mapGetters(["artist"]),
   methods:mapActions(["getArtist"]),
  props:{
    id:String
  },
 
}
</script>