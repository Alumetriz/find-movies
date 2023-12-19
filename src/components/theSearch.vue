<script setup>
import {useMovieStore} from "../stores/MovieStore.js";

const movieStore = useMovieStore()
</script>


<template>
  <div class="flex gap-6">
    <input type="text" v-model="movieStore.movieTitle" class="w-80 mx-auto p-3 rounded-md">
    <button class="bg-green-400 p-3 rounded-md" @click="movieStore.fetchMovies()">Search</button>
  </div>
</template>


<style lang="scss" scoped></style>