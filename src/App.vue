<script setup>
import {useMovieStore} from "./stores/MovieStore.js";

const movieStore = useMovieStore()
</script>

<template>
  <header class="mb-3">
    <h3 class="text-center">Find your movie</h3>
  </header>

  <main>
    <section class="container flex justify-around mx-auto">
      <button class="bg-gray-400 p-3 rounded-md">Favorites</button>
      <button class="bg-green-400 p-3 rounded-md">Search</button>
    </section>

    <section class="container mx-auto flex flex-col gap-6 items-center mt-6">
      <div class="flex gap-6">
        <filter-movies></filter-movies>
        <the-search></the-search>
      </div>

      <movies-list v-if="movieStore.movies"></movies-list>
    </section>
  </main>
</template>

<style scoped>

</style>
