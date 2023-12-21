<script setup>
import {useMovieStore} from "../stores/MovieStore.js";
import {useSearchStore} from "../stores/SearchStore.js";
import {ref} from "vue";

const movieStore = useMovieStore()
const searchStore = useSearchStore()

const movieTitle = ref('')
</script>


<template>
  <div class="flex gap-6">
    <form action="#">
      <input type="text" v-model="movieTitle" class="w-80 mx-auto p-3 rounded-md">
      <button class="bg-green-400 p-3 rounded-md" @click="searchStore.fetchMovies(movieTitle)">Search</button>
    </form>
  </div>
</template>


<style scoped></style>