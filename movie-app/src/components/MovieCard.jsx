import { Link } from "react-router-dom";

function MovieCard({ movie, onToggleFavorite, isFavorite }) {
  const posterUrl =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450?text=No+Poster";

  return (
    <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-2 border-transparent hover:border-indigo-500/50 h-[500px] flex flex-col">
      <Link to={`/movie/${movie.imdbID}`} className="flex-1 flex flex-col">
        <div className="relative flex-1 overflow-hidden">
          <img
            src={posterUrl}
            alt={movie.Title}
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Play Icon on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="bg-white/90 rounded-full p-6 transform scale-0 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
              <svg className="w-12 h-12 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
          </div>

          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>
        
        {/* Title Section at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/90 to-transparent">
          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
            {movie.Title}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-300 flex items-center gap-1">
              <span className="text-lg">📅</span> {movie.Year}
            </p>
            <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg">
              <span className="text-sm">
                {movie.Type === "movie" ? "🎬" : movie.Type === "series" ? "📺" : "🎞️"}
              </span>
              {movie.Type}
            </span>
          </div>
        </div>
      </Link>
      
      {/* Favorite Button */}
      <button
        className={`absolute top-4 right-4 w-14 h-14 rounded-full flex items-center justify-center text-3xl transition-all duration-500 shadow-2xl backdrop-blur-sm z-10 ${
          isFavorite
            ? "bg-gradient-to-br from-red-500 to-pink-500 scale-110 rotate-12"
            : "bg-white/95 hover:scale-125 hover:rotate-12"
        }`}
        onClick={() => onToggleFavorite(movie)}
      >
        {isFavorite ? "💖" : "🤍"}
      </button>

      {/* Corner Decoration */}
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-indigo-500/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}

export default MovieCard;
