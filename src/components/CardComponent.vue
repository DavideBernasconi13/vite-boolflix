<template>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="card flip-card-front">
                <img class="card-img-top" :src="noImg" :alt="item.title || item.name">
            </div>
            <div class="card flip-card-back">
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
@use '../assets/styles/partials/variables' as *;

.flag img {
    height: 25px;
}

.stars {
    color: gold;
}

.flip-card {
    aspect-ratio: 1/1.5;
    background-color: transparent;
    perspective: 1000px;

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.5s;
        transform-style: preserve-3d;
    }

    &:hover .flip-card-inner {
        transform: rotateY(180deg)
    }

    .flip-card-front,
    .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        /* Safari */
        backface-visibility: hidden;
    }

    .flip-card-back {
        padding: 20px;
        background-color: $back;
        color: $whitetext;
        transform: rotateY(180deg);
    }

}
</style>