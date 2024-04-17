<template>
    <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand">Boolflix</a>
        <form class="form-inline d-flex">
            <input class="form-control mr-sm-2" type="search" placeholder="Inserisci una parola" aria-label="Search">
            <!-- <button class="btn btn-outline-success my-2 my-sm-0" >Cerca</button> -->
            <button class="btn btn-outline-light mx-2" type="submit">Cerca</button>
        </form>
    </nav>
</template>

<script>
export default {
    name: 'HeaderComponent',
}
</script>

<style lang="scss" scoped>
nav {
    padding: 10px;
}
</style>