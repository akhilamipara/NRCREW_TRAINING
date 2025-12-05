import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import PageHeader from "../components/PageHeader";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import EmptyState from "../components/EmptyState";
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
        <PageHeader 
          icon="🎬"
          title="Discover Amazing Movies"
          subtitle={
            <>
              <span className="text-3xl">✨</span>
              Search, explore, and save your favorite movies
              <span className="text-3xl">✨</span>
            </>
          }
        />

        <SearchBar onSearch={handleSearch} />

        {loading && <LoadingSpinner message="Searching for movies..." />}

        {error && <ErrorMessage message={error} />}

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
          <EmptyState 
            icon="🔍"
            title={
              <span className="flex items-center justify-center gap-2">
                <span>🎬</span>
                Start Your Movie Journey
                <span>🎬</span>
              </span>
            }
            subtitle={
              <span className="flex items-center justify-center gap-2">
                <span>✨</span>
                Search for any movie to get started!
                <span>✨</span>
              </span>
            }
          />
        )}
      </div>
    </div>
  );
}

export default Home;
