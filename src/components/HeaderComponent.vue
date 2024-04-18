<template>
    <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand">Boolflix</a>
        <div class="form-inline d-flex">
            <input v-model.trim="store.options.params.query" class="form-control mr-sm-2" type="search"
                placeholder="Inserisci una parola" aria-label="Search" @keyup.enter="searchMedia">
            <button class="btn btn-outline-light mx-2" @click="searchMedia">Cerca</button>
        </div>
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
        searchMedia() {
            this.$emit('searchApi');
        }

    }
}
</script>

<style lang="scss" scoped>
nav {
    padding: 10px;
}
</style>