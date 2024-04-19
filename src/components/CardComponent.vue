<template>
    <div class="card">
        <img class="card-img-top" :src="store.imageUrl + item.poster_path" :alt="item.title || item.name">
        <div class="card-body">
            <h5 class="card-title">{{ item.title || item.name }}</h5>
            <p class="card-text">
                <span>Titolo originale: {{ item.original_title || item.original_name }}</span><br>
                <span>Lingua originale: {{ item.original_language }} </span><br>
                <span>{{ item.vote_average }}</span>
            </p>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
export default {
    name: 'CardComponent',
    props: {
        item: Object
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped></style>