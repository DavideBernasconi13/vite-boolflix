<template>
  <HeaderComponent @searchApi="getQuery" />
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
        //console.log(res.data.results);
        this.store.movie = res.data.results;
        //console.log('Lista dei film', this.store.movie)
      }).catch((error) => {
        // handle error
        console.log(error);
      }).finally(() => {
        // always executed
      });
    },
    getTvSeries() {
      axios.get(this.store.apiUrl + this.store.endpoint.serie, this.store.options).then((res) => {
        // console.log(res.data.results);
        this.store.series = res.data.results;
        //console.log('lista serie tv', this.store.series);
      }).catch((error) => {
        // handle error
        console.log(error);
      }).finally(() => {
        // always executed
      });
    },
    getQuery() {
      //this.store.options.params.query = this.store.query; <!---sbagliato!!!!-->
      //console.log('La query nello store è:', this.store.options.params.query);
      if (this.store.options.params.query) {
        this.getMovies();
        this.getTvSeries();
      }

    }
  },
  created() {

  }
}
</script>

<style lang="scss" scoped></style>