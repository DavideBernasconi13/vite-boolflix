<template>
    <main>
        <CardList title="Movie" :list="store.movie" />
        <CardList title="Series" :list="store.series" />
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