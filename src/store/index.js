import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tracks:null,
    artistName:null,
    search:null
  },
 
  actions: {
    getTracks({commit, state}) {
      axios
        .post("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=ba2dce79000a3bf8d7c9a6c2da6981be&format=json")
        .then((res) => {
         state.tracks = res.data.tracks.track
        })
        .catch((err) => {
          console.log(err);
        });
        commit('updateTracks', state.tracks)
    },

    getArtist({commit, state }, artist) {
      axios
        .get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=ba2dce79000a3bf8d7c9a6c2da6981be&format=json`)
        .then((res) => {
          state.artistName = res.data
     
        })
        .catch((err) => {
          console.log(err);
        });
        commit('updateArtist', state.artistName)
    },

    getSearch({commit, state }, value) {
      axios
        .post(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${value}&api_key=ba2dce79000a3bf8d7c9a6c2da6981be&format=json`)
        .then((res) => {
          state.search = res.data.results.trackmatches
        
        })
        .catch((err) => {
          console.log(err);
        });
        commit('resultSearch', state.search)
    },
    
  },
  mutations: {
    updateTracks(state,tracks){
      state.tracks = tracks
    },
    updateArtist(state, artist){
      state.artistName = artist
    },
    resultSearch(state, search){
      state.search = search
    },

  },
  getters:{ 
    tracks(state){
      return state.tracks
    },
    artist(state){
      return state.artistName
    },
    search(state){
      return state.search
    }
  },
 
 
})
