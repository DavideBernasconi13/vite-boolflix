<template>
    <main>
        <div class="wrapper" v-if="store.options.params.query">
            <CardList title="Movie" :list="store.movie" />
            <CardList title="Series" :list="store.series" />
        </div>
        <div v-else>
            <h3>Inserisci una chiave di ricerca...</h3>
        </div>

    </main>

</template>

<script>
import { store } from '../store.js';
import CardList from './CardList.vue';
export default {
    name: 'MainComponent',
    components: {
        CardList
    },
    data() {
        return {
            store
        }
    }
}

</script>

<style lang="scss" scoped>
main {
    padding: 90px;
}
</style>