import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { searchMovies } from "../api";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
    loadDefaultMovies();
  }, []);

  const loadDefaultMovies = async () => {
    setLoading(true);
    const data = await searchMovies("Action", "", "", 1);
    
    if (data.Response === "True") {
      // Only show movies/series that have poster images
      const moviesWithPosters = data.Search.filter(
        movie => movie.Poster && movie.Poster !== "N/A"
      );
      setMovies(moviesWithPosters);
    }
    setLoading(false);
  };

  const loadFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  };

  const handleSearch = async (query) => {
    setLoading(true);
    setError("");

    const data = await searchMovies(query, "", "", 1);

    if (data.Response === "True") {
      // Filter out movies without posters
      const moviesWithPosters = data.Search.filter(movie => movie.Poster && movie.Poster !== "N/A");
      setMovies(moviesWithPosters);
      
      if (moviesWithPosters.length === 0) {
        setError("No movies found with images");
      }
    } else {
      setError(data.Error || "No movies found");
      setMovies([]);
    }
    setLoading(false);
  };

  const toggleFavorite = (movie) => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorite = storedFavorites.some((fav) => fav.imdbID === movie.imdbID);

    if (isFavorite) {
      const updated = storedFavorites.filter((fav) => fav.imdbID !== movie.imdbID);
      localStorage.setItem("favorites", JSON.stringify(updated));
      setFavorites(updated);
    } else {
      const updated = [...storedFavorites, movie];
      localStorage.setItem("favorites", JSON.stringify(updated));
      setFavorites(updated);
    }
  };

  const isFavorite = (movieId) => {
    return favorites.some((fav) => fav.imdbID === movieId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <span className="text-8xl inline-block hover:scale-125 transition-transform duration-500">
              🎬
            </span>
          </div>
          <h1 className="text-7xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 leading-tight">
            Discover Amazing Movies
          </h1>
          
          <p className="text-2xl text-gray-600 flex items-center justify-center gap-3 mt-4">
            <span className="text-3xl">✨</span>
            Search, explore, and save your favorite movies
            <span className="text-3xl">✨</span>
          </p>
        </div>

        <SearchBar onSearch={handleSearch} />

        {loading && (
          <div className="text-center py-24">
            <div className="inline-block relative">
              <div className="rounded-full h-20 w-20 border-t-4 border-b-4 border-indigo-600 mb-4"></div>
              <span className="absolute inset-0 flex items-center justify-center text-4xl">
                🎬
              </span>
            </div>
            <p className="mt-6 text-2xl font-semibold text-gray-600 flex items-center justify-center gap-2">
              <span className="text-3xl">🔍</span>
              Searching for movies...
              <span className="text-3xl">🔍</span>
            </p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <div className="inline-block p-8 bg-gradient-to-br from-red-100 to-pink-100 rounded-3xl shadow-2xl border-2 border-red-300">
              <p className="text-6xl mb-4">❌</p>
              <p className="text-2xl font-bold text-red-600">{error}</p>
            </div>
          </div>
        )}

        {movies.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
            {movies.map((movie, index) => (
              <div
                key={movie.imdbID}
              >
                <MovieCard
                  movie={movie}
                  onToggleFavorite={toggleFavorite}
                  isFavorite={isFavorite(movie.imdbID)}
                />
              </div>
            ))}
          </div>
        )}

        {!loading && !error && movies.length === 0 && (
          <div className="text-center py-24">
            <div className="inline-block p-16 bg-gradient-to-br from-white to-indigo-50 rounded-3xl shadow-2xl border-4 border-indigo-200 hover:scale-105 transition-transform duration-500">
              <p className="text-8xl mb-6">🔍</p>
              <p className="text-3xl font-bold text-gray-800 mb-3 flex items-center justify-center gap-2">
                <span>🎬</span>
                Start Your Movie Journey
                <span>🎬</span>
              </p>
              <p className="text-xl text-gray-600 flex items-center justify-center gap-2">
                <span>✨</span>
                Search for any movie to get started!
                <span>✨</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
