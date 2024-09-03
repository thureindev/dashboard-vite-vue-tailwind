<template>
    <div class="min-h-full flex flex-col">
        <NavBar></NavBar>

        <div class="content-view min-h-full w-full flex-grow">

            <RouterView />

        </div>

        <FootBar></FootBar>
    </div>
</template>

<script setup>
import NavBar from './NavBar.vue';
import FootBar from './customized/FootBar.vue';
import { RouterView } from 'vue-router';
</script>

<style scoped>
.content-view {
    /* Diagonal Lines pattern from https://heropatterns.com/ */
    background-color: #DFDBE5;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");

}
</style>