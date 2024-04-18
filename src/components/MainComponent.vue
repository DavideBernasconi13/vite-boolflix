<template>
    <main class="bg-secondary">
        Main component
        <CardList />
    </main>

</template>

<script>
import { store } from '../store.js';
import CardList from './CardList.vue';
export default {
    name: 'MainComponent',
    components: {
        CardList
    }
}

</script>

<style lang="scss" scoped>
main {
    height: calc(100vh - 60px);
}
</style>