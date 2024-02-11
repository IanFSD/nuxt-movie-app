<template>
    <div class="flex flex-col py-10">
        <div>
            <h2 class="text-2xl font-bold text-center">Nuxt Movies App</h2>
        </div>
        <div class="flex justify-center items-center h-32">
            <input v-model="searchTerm" @input="handleSearch" placeholder="Search" type="text" class="px-2 py-1 border border-gray-800 rounded-md min-w-64 text-gray-500">
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 self-center gap-x-10 gap-y-10 mb-10">
            <MovieCard :movie="movie" v-for="movie in movies" :key="movie"/>
        </div>
        <div v-if="movies?.length" class="flex justify-center">
            <button v-if="!disabledPrevious" @click="page--" class="px-4 py-2 text-m border rounded-lg">Previous</button>
            <div class="px-4 py-2 text-m border rounded-lg">{{ page }}</div>
            <button v-if="!disabledNext" @click="page++" class="px-4 py-2 text-m border rounded-lg">Next</button>
        </div>
    </div>  
</template>
    
<script>
import MovieCard from '@/components/MovieCard.vue'; // Adjust the path based on your project structure

export default {
  components: {
    MovieCard,
  },
  data() {
    return {
     url: process.env.NUXT_API_BASE_URL || "http://localhost:5000",
      searchTerm: '',
      movies: [],
      page: 1,
      disabledPrevious: false,
      disabledNext: false,
    };
  },
  async created() {
    await this.fetchTrendingMovies(); // Initial API request when the component is created
  },
  methods: {
    async fetchTrendingMovies() {
      try {
        // Make your API request here using the searchTerm and page variables
        const response = await $fetch(`${this.url}/movies/trending/week`, {
        method: 'GET'
    });
        // Update the data property with the API response
        this.movies = response;
        // Update disabledPrevious and disabledNext based on your API response
        //this.disabledPrevious = response.data.page <= 1;
       // this.disabledNext = response.data.page >= response.data.total_pages;
      } catch (error) {
        console.error('Error fetching trending  movies:', error);
      }
    },  
    async fetchMovies() {
      try {
        // Make your API request here using the searchTerm and page variables
        const response = await useFetch(
          `/movies/search?query=${this.searchTerm}&page=${this.page}`
        );
        // Update the data property with the API response
        this.movies = response;

        // Update disabledPrevious and disabledNext based on your API response
        this.disabledPrevious = response.data.page <= 1;
        this.disabledNext = response.data.page >= response.data.total_pages;
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },
    handleSearch() {
      this.page = 1; // Reset page to 1 when a new search term is entered
      this.fetchMovies();
    },
  },
};
</script>