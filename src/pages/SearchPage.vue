<script setup>
import {useMovieStore} from "../stores/MovieStore.js";
import {useSearchStore} from "../stores/SearchStore.js";

const movieStore = useMovieStore()
const searchStore = useSearchStore()
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