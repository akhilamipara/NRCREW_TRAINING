const API_KEY = "8b07acee";
const BASE_URL = "http://www.omdbapi.com/";

export const searchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { Error: "Failed to fetch movies" };
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return { Error: "Failed to fetch movie details" };
  }
};
