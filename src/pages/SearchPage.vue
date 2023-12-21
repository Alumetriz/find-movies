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
    <div class="loader" v-if="searchStore.loader"></div>
    <movies-list v-if="movieStore.movies" :movies="movieStore.filteredMovies"></movies-list>
  </section>
</template>


<style scoped>
.loader {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>