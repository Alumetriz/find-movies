<script setup>
import {useMovieStore} from "../stores/MovieStore.js";

const movieStore = useMovieStore()

</script>


<template>
  <select v-model="movieStore.sortValue">
    <option value="popular">Более популярные</option>
    <option value="less-popular">Менее популярные</option>
  </select>
</template>


<style lang="scss" scoped>

</style>