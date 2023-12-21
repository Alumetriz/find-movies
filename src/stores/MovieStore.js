import {defineStore} from "pinia";

export const useMovieStore = defineStore('movieStore', {
    state: () => {
        return {
            activeTab: 'search',
            sortValue: 'popular',
            favoritesSortValue: 'favorites',
            movies: null,
        }
    },
    actions: {
        toggleToFavorites(movie) {
            movie.isFavorite = !movie.isFavorite
        },

        toggleToWatched(movie) {
            movie.isWatched = !movie.isWatched
        }
    },
    getters: {
        filteredMovies: (state) => {
            if (!state.movies) return [];
            else {
                const sortedMovies = [...state.movies.results]
                console.log(state.movies)
                return state.sortValue === 'popular'
                    ? sortedMovies.sort((a, b) => b.popularity - a.popularity)
                    : sortedMovies.sort((a, b) => a.popularity - b.popularity)
            }
        },
        favoritesMovies: (state) => {
            if (state.favoritesSortValue === 'favorites') {
                return state.movies?.results?.filter((movie) => movie.isFavorite)
            } else if (state.favoritesSortValue === 'watched') {
                return state.movies?.results.filter((movie) => movie.isFavorite && movie.isWatched)
            } else if (state.favoritesSortValue === 'not-watched') {
                return state.movies?.results.filter((movie) => movie.isFavorite && !movie.isWatched)
            }
        }
    }
})