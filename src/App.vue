<script setup>
import {useMovieStore} from "./stores/MovieStore.js";
import SearchPage from "./pages/SearchPage.vue";
import {computed} from "vue";

const movieStore = useMovieStore()

const classObj = computed(() => (tab) => ({
  'bg-green-400': movieStore.activeTab === tab,
  'cursor-not-allowed': movieStore.activeTab === tab
}))
</script>

<template>
  <header class="mb-3">
    <h3 class="text-center">Find your movie</h3>
  </header>

  <main>
    <section class="container flex justify-around mx-auto">
      <button
          class="bg-gray-400 p-3 rounded-md"
          :class="classObj('favorites')"
          @click="movieStore.activeTab = 'favorites'"
      >Favorites
      </button>
      <button
          class="bg-green-400 p-3 rounded-md"
          :class="classObj('search')"
          @click="movieStore.activeTab = 'search'"
      >Search
      </button>
    </section>

    <search-page v-if="movieStore.activeTab === 'search'"></search-page>
    <favorites-page v-if="movieStore.activeTab === 'favorites'"></favorites-page>
  </main>
</template>

<style scoped>

</style>
