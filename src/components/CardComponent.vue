<template>
    <div class="card">
        <img class="card-img-top" :src="store.imageUrl + item.poster_path" :alt="item.title || item.name">
        <div class="card-body">
            <h4 class="card-title">{{ item.title || item.name }}</h4>
            <h6 class="card-title">Titolo originale: {{ item.original_title || item.original_name }}</h6>
            <div class="card-text">
                <div class="flag">
                    <span>Lingua originale: </span><img :src="flag" :alt="item.original_language + ' flag'">
                </div>

                <span>{{ item.vote_average }}</span>
            </div>
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
            store,
            flags: ['de', 'es', 'fr', 'it']
        }
    },
    computed: {
        flag() {
            if (this.flags.includes(this.item.original_language)) {
                return `/images/${item.original_language}.webp`;
            } else {
                return `/images/Noflag.png`;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.flag img {
    height: 25px;
}
</style>