import {defineStore} from "pinia";

export const useMovieStore = defineStore('movieStore', {
    state: () => {
        return {
            movieTitle: '',
            movies: [],
            api_options: {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGUzY2ZmMTEyNjI3ZjdlYzBkNGZhZGQ1ZGM1MGUwYyIsInN1YiI6IjY1ODA4YWYxZDUxOTFmMDYwNmFkODJiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kjFa056Ks9OvMs_Y_ML4nc8NOIdx7CweaDoUMqUlGsA'
                }
            }
        }
    },
    actions: {
        async fetchMovie(title) {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`, this.api_options)
            const data = await response.json()

            data.results = data.results.map((movie) => {
                return {
                    ...movie,
                    isFavorite: false,
                }
            })
            return data
        },

        async fetchMovies() {
            this.movies = await this.fetchMovie(this.movieTitle)
        }
    }
})