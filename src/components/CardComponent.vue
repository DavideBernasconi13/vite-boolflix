<template>
    <div class="card">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ item.title || item.name }}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
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