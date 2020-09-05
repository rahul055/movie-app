const API_KEY = "2b03864595784f60d45a36f6a1a3a68e";

export default {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchMystryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchScifiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchTv: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};
