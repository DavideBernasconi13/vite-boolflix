<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script>
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue'
import MainComponent from './components/MainComponent.vue'
import { store } from './store.js';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getMovies() {
      axios.get(this.store.apiUrl + this.store.endpoint.movie, this.store.options).then((res) => {
        console.log(res.data.results)
      })
    },
    getTvSeries() {
      axios.get(this.store.apiUrl + this.store.endpoint.serie, this.store.options).then((res) => {
        console.log(res.data.results)
      })
    }
  },
  created() {
    this.getMovies();
    this.getTvSeries();
  }
}
</script>

<style lang="scss" scoped></style>