<template>
    <div class="card">
        <img class="card-img-top" :src="noImg" :alt="item.title || item.name">
        <div class="card-body">
            <h4 class="card-title">{{ item.title || item.name }}</h4>
            <h6 class="card-title">Titolo originale: {{ item.original_title || item.original_name }}</h6>
            <div class="card-text">
                <div class="flag">
                    <span>Lingua originale: </span><img :src="imgflag" :alt="item.original_language + ' flag'">
                </div>
                <div class="stars">
                    <i :class="vote >= n ? 'fa-solid' : 'fa-regular'" class="fa-star" v-for="n in 5"></i>
                </div>

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
        imgflag() {
            if (this.flags.includes(this.item.original_language)) {
                return `/images/${this.item.original_language}.webp`
            } else {
                return `/images/Noflag.png`
            }
        },
        noImg() {
            if (this.item.poster_path === null) {
                return `/images/placeholder.jpg`
            } else {
                return `${this.store.imageUrl + this.item.poster_path}`
            }
        },
        vote() {
            return Math.ceil(this.item.vote_average / 2)
        }
    }
}
</script>

<style lang="scss" scoped>
.flag img {
    height: 25px;
}

.stars {
    color: gold;
}
</style>