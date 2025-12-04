import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  };

  const toggleFavorite = (movie) => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updated = storedFavorites.filter((fav) => fav.imdbID !== movie.imdbID);
    localStorage.setItem("favorites", JSON.stringify(updated));
    setFavorites(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-8xl inline-block hover:scale-125 transition-transform duration-500">
              💖
            </span>
          </div>
          <h1 className="text-7xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            My Favorites
          </h1>
          <p className="text-2xl text-gray-600 flex items-center justify-center gap-2">
            <span className="text-3xl">✨</span>
            Your handpicked collection of amazing movies
            <span className="text-3xl">✨</span>
          </p>
        </div>

        {favorites.length > 0 ? (
          <>
            <div className="text-center mb-8">
              <div className="inline-block px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full shadow-lg">
                <span className="text-xl font-bold flex items-center gap-2">
                  <span className="text-2xl">💖</span>
                  {favorites.length} {favorites.length === 1 ? "Movie" : "Movies"} in your collection
                  <span className="text-2xl">💖</span>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {favorites.map((movie, index) => (
                <div
                  key={movie.imdbID}
                >
                  <MovieCard
                    movie={movie}
                    onToggleFavorite={toggleFavorite}
                    isFavorite={true}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-24">
            <div className="inline-block p-16 bg-gradient-to-br from-white to-indigo-50 rounded-3xl shadow-2xl border-4 border-indigo-200 hover:scale-105 transition-transform duration-500">
              <p className="text-8xl mb-6">💔</p>
              <p className="text-3xl font-bold text-gray-800 mb-3 flex items-center justify-center gap-2">
                <span>😢</span>
                No favorites yet!
                <span>😢</span>
              </p>
              <p className="text-xl text-gray-600 mb-8 flex items-center justify-center gap-2">
                <span>👉</span>
                Start adding movies to your favorites
                <span>👈</span>
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-xl font-bold rounded-full hover:scale-110 hover:shadow-2xl transition-all duration-300 border-2 border-white/30"
              >
                <span className="text-2xl">🎬</span>
                Explore Movies
                <span className="text-2xl">✨</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
