<template>
    <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand">Boolflix</a>
        <form class="form-inline d-flex">
            <input v-model="queryString" class="form-control mr-sm-2" type="search" placeholder="Inserisci una parola"
                aria-label="Search">
            <button class="btn btn-outline-light mx-2" type="submit" @click="getQuery()">Cerca</button>
        </form>
    </nav>
</template>

<script>
import { store } from '../store.js';
export default {
    name: 'HeaderComponent',
    data() {
        return {
            store,
            queryString: ''
        }
    },
    methods: {
        getQuery() {
            this.store.options.query = queryString;
            console.log('La query nello store è:', this.store.option.query);
        }

    }
}
</script>

<style lang="scss" scoped>
nav {
    padding: 10px;
}
</style>