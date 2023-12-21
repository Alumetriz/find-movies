import {defineStore} from "pinia";
import {computed, reactive, ref, watch} from "vue";

export const useMovieStore = defineStore('movieStore', () => {
    const activeTab = ref('search')
    const sortValue = ref('popular')
    const favoritesSortValue = ref('favorites')
    const movies = ref(null)
    const moviesInLocalStorage = JSON.parse(localStorage.getItem('movies'))._value

    if (moviesInLocalStorage) movies.value = moviesInLocalStorage

    function toggleToFavorites(movie) {
        movie.isFavorite = !movie.isFavorite
    }

    function toggleToWatched(movie) {
        movie.isWatched = !movie.isWatched
    }

    const filteredMovies = computed(() => {
        if (!movies.value) return []
        else {
            const sortedMovies = [...movies.value]
            return sortValue.value === 'popular'
                ? sortedMovies.sort((a, b) => b.popularity - a.popularity)
                : sortedMovies.sort((a, b) => a.popularity - b.popularity)
        }
    })

    const favoritesMovies = computed(() => {
        if (favoritesSortValue.value === 'favorites') {
            return movies.value?.filter((movie) => movie.isFavorite)
        } else if (favoritesSortValue.value === 'watched') {
            return movies.value?.filter((movie) => movie.isFavorite && movie.isWatched)
        } else if (favoritesSortValue.value === 'not-watched') {
            return movies.value?.filter((movie) => movie.isFavorite && !movie.isWatched)
        }
    })

    watch(() => movies, (state) => {
        localStorage.setItem('movies', JSON.stringify(state))
    }, {deep: true})

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