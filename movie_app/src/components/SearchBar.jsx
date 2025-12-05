import { useState, useEffect, useRef } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const historyRef = useRef(null);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setSearchHistory(history);

    const handleClickOutside = (event) => {
      if (historyRef.current && !historyRef.current.contains(event.target)) {
        setShowHistory(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      performSearch(query.trim());
    }
  };

  const performSearch = (searchQuery) => {
    onSearch(searchQuery);
    
    // Update search history
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    const updatedHistory = [searchQuery, ...history.filter(item => item !== searchQuery)].slice(0, 5);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    setSearchHistory(updatedHistory);
    setShowHistory(false);
  };

  const handleHistoryClick = (historyItem) => {
    setQuery(historyItem);
    performSearch(historyItem);
  };

  const clearHistory = () => {
    localStorage.removeItem("searchHistory");
    setSearchHistory([]);
  };

  return (
    <div className="relative max-w-2xl mx-auto my-8" ref={historyRef}>
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search for movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowHistory(true)}
            className="w-full px-6 py-3 text-base border-2 border-gray-300 rounded-full outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition-all shadow-sm"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              ✕
            </button>
          )}
        </div>
        <button 
          type="submit" 
          className="px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-400/40 transition-all active:scale-95"
        >
          🔍 Search
        </button>
      </form>

      {/* Search History Dropdown */}
      {showHistory && searchHistory.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden z-50">
          <div className="flex justify-between items-center px-4 py-2 bg-gray-50 border-b">
            <span className="text-sm font-semibold text-gray-700">Recent Searches</span>
            <button
              onClick={clearHistory}
              className="text-xs text-red-500 hover:text-red-700 font-medium transition-colors"
            >
              Clear All
            </button>
          </div>
          <ul className="max-h-60 overflow-y-auto">
            {searchHistory.map((item, index) => (
              <li
                key={index}
                onClick={() => handleHistoryClick(item)}
                className="px-4 py-3 hover:bg-indigo-50 cursor-pointer transition-colors flex items-center gap-3 group"
              >
                <span className="text-gray-400 group-hover:text-indigo-500 transition-colors">🕐</span>
                <span className="text-gray-700 group-hover:text-indigo-600 transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
