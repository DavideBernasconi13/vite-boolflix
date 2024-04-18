<template>
    <div class="container">
        <h2>{{ title }}</h2>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-3" v-for="(item, index) in list" :key=item.id>
                <CardComponent />
                {{ item.title || item.name }}
            </div>
        </div>

    </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
export default {
    name: 'CardList',
    components: {
        CardComponent
    },
    props: {
        title: String,
        list: Array
    }
}
</script>

<style lang="scss" scoped></style>