<template>
    <div>
        cardlist
        <CardComponent />
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
export default {
    name: 'CardList',
    components: {
        CardComponent
    }
}
</script>

<style lang="scss" scoped></style>