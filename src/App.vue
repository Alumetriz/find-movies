<script setup>
import {useMovieStore} from "./stores/MovieStore.js";

const store = useMovieStore()

setInterval(() => {
  store.increment()
}, 1000)

</script>

<template>
  <button class="border border-green-400 p-2 rounded-md" @click="store.increment()">Increase</button>
  <h1 class="text-3xl font-bold text-green-400">{{store.count}}</h1>
</template>

<style scoped></style>
