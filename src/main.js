import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import './assets/main.css'
import FindedMovie from "./components/FindedMovie.vue";
import TheSearch from "./components/theSearch.vue";
import MoviesList from "./components/MoviesList.vue";
import FilterMovies from "./components/FilterMovies.vue";
import FavoritesPage from "./pages/FavoritesPage.vue";

const app = createApp(App)
const pinia = createPinia()

app.component('finded-movie', FindedMovie)
app.component('the-search', TheSearch)
app.component('movies-list', MoviesList)
app.component('filter-movies', FilterMovies)
app.component('favorites-page', FavoritesPage)

app.use(pinia)
app.mount('#app')
