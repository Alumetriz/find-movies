<script setup>
import {useMovieStore} from "../stores/MovieStore.js";

defineProps({
  movies: {
    type: Array
  }
})

const movieStore = useMovieStore()

</script>


<template>

  <div class="flex flex-col gap-6">
    <finded-movie v-for="movie in movies" :key="movie.id" :movie="movie"></finded-movie>
  </div>

</template>


<style lang="scss" scoped>

</style>