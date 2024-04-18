<template>
    <main>
        <CardList />
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

<style lang="scss" scoped></style>