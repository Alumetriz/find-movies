<script setup>
import {useMovieStore} from "../stores/MovieStore.js";

const movieStore = useMovieStore()
</script>


<template>
  <section class="container mx-auto flex flex-col gap-6 items-center mt-6">
    <div class="flex gap-6">
      <filter-movies></filter-movies>
      <the-search></the-search>
    </div>

    <movies-list v-if="movieStore.movies" :movies="movieStore.filteredMovies"></movies-list>
  </section>
</template>


<style lang="scss" scoped>

</style>