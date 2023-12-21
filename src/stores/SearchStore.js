import {defineStore} from "pinia";
import {useMovieStore} from "./MovieStore.js";
import {ref} from "vue";

export const useSearchStore = defineStore('searchStore', () => {
    const loader = ref(false)
    const api_options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGUzY2ZmMTEyNjI3ZjdlYzBkNGZhZGQ1ZGM1MGUwYyIsInN1YiI6IjY1ODA4YWYxZDUxOTFmMDYwNmFkODJiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kjFa056Ks9OvMs_Y_ML4nc8NOIdx7CweaDoUMqUlGsA'
        }
    }

    async function fetchMovies(title) {
        try {
            loader.value = true
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`, api_options)
            const data = await response.json()

            data.results = data.results.map((movie) => {
                return {
                    ...movie,
                    isFavorite: false,
                    isWatched: false
                }
            })

            const movieStore = useMovieStore()
            console.log(movieStore.movies)
            movieStore.movies = data.results
        } catch (e) {
            console.log(e)
        } finally {
            loader.value = false
        }
    }

    return {
        loader, fetchMovies
    }
})