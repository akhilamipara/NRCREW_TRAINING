import { useState, useEffect } from "react";

function UserRating({ movieId }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    const ratings = JSON.parse(localStorage.getItem("userRatings")) || {};
    setRating(ratings[movieId] || 0);
  }, [movieId]);

  const handleRating = (value) => {
    setRating(value);
    const ratings = JSON.parse(localStorage.getItem("userRatings")) || {};
    ratings[movieId] = value;
    localStorage.setItem("userRatings", JSON.stringify(ratings));
  };

  return (
    <div className="mt-6 p-4 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-700 dark:to-indigo-900/30 rounded-lg border-2 border-indigo-200 dark:border-indigo-700">
      <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-2 flex items-center gap-1">
        <span className="text-lg">⭐</span> Your Rating
      </h3>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className="text-4xl transition-all duration-300 hover:scale-125"
          >
            {star <= (hover || rating) ? "⭐" : "☆"}
          </button>
        ))}
      </div>
      {rating > 0 && (
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 flex items-center gap-1">
          <span>✨</span> You rated this {rating}/5 stars
        </p>
      )}
    </div>
  );
}

export default UserRating;
