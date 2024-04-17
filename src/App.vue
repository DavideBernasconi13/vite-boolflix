<template>
  <h1 class="text-center">Ciao</h1>
  <i class="fa fa-solid fa-home"></i>
</template>

<script>
import axios from 'axios';
import { store } from './store.js';
export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  methods: {
    getMovies() {
      axios.get(this.store.apiUrl + this.store.endpoint.movie, this.store.option).then((res) => {
        console.log(data.res.result)
      })
    },
    getTvSeries() {
      axios.get(this.store.apiUrl + this.store.endpoint.serie, this.store.option).then((res) => {
        console.log(data.res.result)
      })
    }
  },
  created() {
  getMovies();
  getTVSeries();
}
}
</script>

<style lang="scss" scoped></style>