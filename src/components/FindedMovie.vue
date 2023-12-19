<script setup>
import {useMovieStore} from "../stores/MovieStore.js";

const movieStore = useMovieStore()

defineProps({
  movie: {
    type: Object,
  }
})
</script>


<template>
  <div class="flex gap-10 p-3 bg-gray-200 rounded-md">
    <img v-if="movie.poster_path" :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`" alt="">
    <img v-else src="https://via.placeholder.com/300x450" alt="">
    <div class="flex flex-col gap-6">
      <div class="flex gap-3">
        <h3 class="text-center font-bold text-3xl">{{ movie.title }}</h3>
        <span class="text-center font-semibold text-2xl">({{ movie.release_date }})</span>
      </div>
      <p class="text-center font-normal text-lg">{{ movie.overview }}</p>
      <button
          class="bg-green-400 p-2 rounded-md ml-auto"
          :class="{'bg-red-400': movie.isFavorite}"
          @click="movieStore.toggleToFavorites(movie)"
      >
        {{ !movie.isFavorite === true ? 'Add to favorites' : 'Remove from favorites' }}
      </button>
      <button
          class="bg-green-400 p-2 rounded-md ml-auto"
          v-if="movieStore.activeTab === 'favorites'"
      >
        {{ !movie.isFavorite === true ? 'Add to favorites' : 'Remove from favorites' }}
      </button>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>