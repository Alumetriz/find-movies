import {defineStore} from "pinia";
import {computed, reactive, ref} from "vue";

export const useMovieStore = defineStore('movieStore', () => {
    const activeTab = ref('search')
    const sortValue = ref('popular')
    const favoritesSortValue = ref('favorites')
    const movies = ref(null)

    function toggleToFavorites(movie) {
        movie.isFavorite = !movie.isFavorite
    }

    function toggleToWatched(movie) {
        movie.isWatched = !movie.isWatched
    }

    const filteredMovies = computed(() => {
        if (!movies.value) return []
        else {
            const sortedMovies = [...movies.value.results]
            return sortValue.value === 'popular'
                ? sortedMovies.sort((a, b) => b.popularity - a.popularity)
                : sortedMovies.sort((a, b) => a.popularity - b.popularity)
        }
    })

    const favoritesMovies = computed(() => {
        if (favoritesSortValue.value === 'favorites') {
            return movies.value?.results?.filter((movie) => movie.isFavorite)
        } else if (favoritesSortValue.value === 'watched') {
            return movies.value?.results.filter((movie) => movie.isFavorite && movie.isWatched)
        } else if (favoritesSortValue.value === 'not-watched') {
            return movies.value?.results.filter((movie) => movie.isFavorite && !movie.isWatched)
        }
    })

    return {
        activeTab,
        sortValue,
        favoritesSortValue,
        movies,
        toggleToFavorites,
        toggleToWatched,
        filteredMovies,
        favoritesMovies
    }
})