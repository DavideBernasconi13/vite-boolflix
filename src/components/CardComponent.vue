<template>
    <div>
    Card component
    </div>
</template>

<script>
import { store } from '../store.js';
export default {
    name: 'CardComponent',
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped></style>