import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../api";
import UserRating from "./UserRating";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      const data = await getMovieDetails(id);
      if (data.Response !== "False") {
        setMovie(data);
      }
      setLoading(false);
    };

    const checkFavoriteStatus = () => {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setIsFavorite(favorites.some((fav) => fav.imdbID === id));
    };

    fetchDetails();
    checkFavoriteStatus();
  }, [id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    if (isFavorite) {
      const updated = favorites.filter((fav) => fav.imdbID !== id);
      localStorage.setItem("favorites", JSON.stringify(updated));
      setIsFavorite(false);
    } else {
      const movieData = {
        imdbID: movie.imdbID,
        Title: movie.Title,
        Year: movie.Year,
        Poster: movie.Poster,
        Type: movie.Type,
      };
      favorites.push(movieData);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block relative">
            <div className="rounded-full h-24 w-24 border-t-4 border-b-4 border-indigo-600 mb-4"></div>
            <span className="absolute inset-0 flex items-center justify-center text-5xl">
              🎬
            </span>
          </div>
          <p className="mt-6 text-2xl font-semibold text-gray-600 flex items-center justify-center gap-2">
            <span className="text-3xl">🍿</span>
            Loading movie details...
            <span className="text-3xl">🍿</span>
          </p>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-purple-50 flex items-center justify-center">
        <div className="text-center p-12 bg-white rounded-3xl shadow-2xl">
          <p className="text-6xl mb-4">❌</p>
          <p className="text-2xl font-bold text-red-600">Movie not found</p>
        </div>
      </div>
    );
  }

  const posterUrl = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster";

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-8">
        <button 
          className="flex items-center gap-2 px-6 py-3 text-base font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 mb-8"
          onClick={() => navigate(-1)}
        >
          <span className="text-xl">⬅️</span>
          Back
        </button>
        
        <div className="grid md:grid-cols-[400px_1fr] gap-12 bg-white rounded-3xl p-8 shadow-2xl border-2 border-indigo-100">
          <div className="space-y-4">
            <div className="relative group">
              <img 
                src={posterUrl} 
                alt={movie.Title} 
                className="w-full rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
            
            <button
              className={`w-full px-6 py-4 text-lg font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 ${
                isFavorite 
                  ? "bg-gradient-to-r from-red-500 to-pink-500 text-white scale-105 shadow-2xl" 
                  : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-105 hover:shadow-2xl"
              }`}
              onClick={toggleFavorite}
            >
              <span className="text-2xl">{isFavorite ? "💖" : "🤍"}</span>
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>

            <UserRating movieId={id} />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300">
                {movie.Title}
              </h1>
              
              <div className="flex gap-4 mb-4 flex-wrap">
                <span className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-gray-700 font-semibold">
                  <span className="text-xl">📅</span> {movie.Year}
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-gray-700 font-semibold">
                  <span className="text-xl">⏱️</span> {movie.Runtime}
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-red-100 rounded-full text-gray-700 font-semibold">
                  <span className="text-xl">🎭</span> {movie.Genre}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xl mb-6 px-6 py-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl shadow-lg">
                <span className="text-3xl">⭐</span>
                <span className="font-bold text-gray-800">IMDb Rating:</span>
                <span className="text-2xl font-extrabold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  {movie.imdbRating}/10
                </span>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border-2 border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-3xl">📖</span> Plot
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">{movie.Plot}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200">
                <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="text-2xl">🎬</span> Director
                </h3>
                <p className="text-base text-gray-700 font-semibold">{movie.Director}</p>
              </div>

              <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200">
                <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="text-2xl">✍️</span> Writer
                </h3>
                <p className="text-base text-gray-700 font-semibold">{movie.Writer}</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl border-2 border-pink-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-3xl">🌟</span> Cast
              </h3>
              <p className="text-lg text-gray-700 font-semibold">{movie.Actors}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
                <strong className="text-gray-800 flex items-center gap-2">
                  <span className="text-xl">🌍</span> Language:
                </strong>
                <p className="text-gray-700 font-semibold mt-1">{movie.Language}</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200">
                <strong className="text-gray-800 flex items-center gap-2">
                  <span className="text-xl">🗺️</span> Country:
                </strong>
                <p className="text-gray-700 font-semibold mt-1">{movie.Country}</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl border-2 border-yellow-200">
                <strong className="text-gray-800 flex items-center gap-2">
                  <span className="text-xl">🏆</span> Awards:
                </strong>
                <p className="text-gray-700 font-semibold mt-1">{movie.Awards}</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border-2 border-purple-200">
                <strong className="text-gray-800 flex items-center gap-2">
                  <span className="text-xl">💰</span> Box Office:
                </strong>
                <p className="text-gray-700 font-semibold mt-1">{movie.BoxOffice || "N/A"}</p>
              </div>
            </div>

            {movie.Ratings && movie.Ratings.length > 0 && (
              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border-2 border-orange-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-3xl">📊</span> All Ratings
                </h3>
                <div className="flex flex-col gap-3">
                  {movie.Ratings.map((rating, index) => (
                    <div 
                      key={index} 
                      className="flex justify-between items-center px-5 py-3 bg-white rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                    >
                      <span className="font-bold text-gray-800 flex items-center gap-2">
                        <span className="text-xl">
                          {rating.Source.includes("Internet") ? "🌐" : rating.Source.includes("Rotten") ? "🍅" : "🎯"}
                        </span>
                        {rating.Source}:
                      </span>
                      <span className="text-lg font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {rating.Value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
