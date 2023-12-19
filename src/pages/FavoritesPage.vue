<script setup>
import {useMovieStore} from "../stores/MovieStore.js";

const movieStore = useMovieStore()
</script>


<template>
  <section class="container mx-auto flex flex-col gap-6 items-center mt-6">
    <select v-model="movieStore.favoritesSortValue">
      <option value="favorites">Избранные</option>
      <option value="watched">Просмотренные</option>
      <option value="not-watched">Не просмотренные</option>
    </select>
    <movies-list v-if="movieStore.movies" :movies="movieStore.favoritesMovies"></movies-list>
  </section>
</template>


<style lang="scss" scoped>

</style>