<template>
    <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand">Boolflix</a>
        <form class="form-inline d-flex">
            <input class="form-control mr-sm-2" type="search" placeholder="Inserisci una parola" aria-label="Search"
                v-model="this.store.options.query">
            <button class="btn btn-outline-light mx-2" type="submit">Cerca</button>
        </form>
    </nav>
</template>

<script>
import { store } from '../store.js';
export default {
    name: 'HeaderComponent',
    data() {
        return {
            store
        }
    }, 
    methods: {

    }
}
</script>

<style lang="scss" scoped>
nav {
    padding: 10px;
}
</style>