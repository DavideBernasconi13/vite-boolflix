<template>
    <div class="container mb-4">
        <h2>{{ title }}</h2>
        <div class="dflex">
            <div class="my-col" v-for="(card, index) in list" :key=card.id>
                <CardComponent :item="card" />

            </div>
        </div>

    </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
import { store } from '../store.js';
export default {
    name: 'CardList',
    components: {
        CardComponent
    },
    props: {
        title: String,
        list: Array
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.my-col {
    width: 300px;
    flex-shrink: 0;
    overflow-y: hidden;
}

.dflex {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
}


/* -------------------------------------------------------------------------------- */
/* ! Scrollbar custom */
/* -------------------------------------------------------------------------------- */
/* width */
::-webkit-scrollbar {
    width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
    border-radius: 3px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: $colorred;
}
</style>