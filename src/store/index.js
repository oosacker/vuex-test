import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    photos: []
  },
  mutations: {
    setPhotos: (state, photos) => (state.photos = photos)
  },
  actions: {
    fetchPhotos({ commit }) {
      return new Promise((resolve, reject) => {
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
        .then((response) => {
          commit('setPhotos', response.data)
          resolve()
        })
        .catch((error) => {
          commit('setPhotos', [])
          alert(error)
          reject()
        });
      })
    }
  },
  modules: {
  }
})
