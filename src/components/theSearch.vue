<script setup>
import {onMounted, ref, watch} from "vue";
import {useMovieStore} from "../stores/MovieStore.js";

const movieTitle = ref('')

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGUzY2ZmMTEyNjI3ZjdlYzBkNGZhZGQ1ZGM1MGUwYyIsInN1YiI6IjY1ODA4YWYxZDUxOTFmMDYwNmFkODJiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kjFa056Ks9OvMs_Y_ML4nc8NOIdx7CweaDoUMqUlGsA'
  }
};


const fetchMovie = async (title) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`, options)
  return await response.json()
}

const movieStore = useMovieStore()

const fetchMovies = async () => {
  movieStore.movies = await fetchMovie(movieTitle.value)
  movieStore.movies.results.sort((a, b) => b.popularity - a.popularity)
}
</script>


<template>
  <div class="flex gap-6">
    <input type="text" v-model="movieTitle" class="w-80 mx-auto p-3 rounded-md">
    <button class="bg-green-400 p-3 rounded-md" @click="fetchMovies">Search</button>
  </div>
</template>


<style lang="scss" scoped>

</style>