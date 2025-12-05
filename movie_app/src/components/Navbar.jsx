import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-2xl sticky top-0 z-50 backdrop-blur-md border-b-4 border-white/20">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-4 text-2xl font-bold text-white hover:scale-110 transition-all duration-300 group"
          >
            <span className="text-5xl group-hover:rotate-12 transition-transform duration-500">
              🎬
            </span>
            <span className="bg-white/20 px-5 py-2.5 rounded-2xl backdrop-blur-sm group-hover:bg-white/30 group-hover:shadow-2xl transition-all duration-300 border-2 border-white/30">
              <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                Movie Search
              </span>
            </span>
          </Link>
          
          <ul className="flex gap-3 list-none">
            <li>
              <Link
                to="/"
                className={`flex items-center gap-2 text-white font-semibold px-5 py-2.5 rounded-2xl transition-all duration-300 ${
                  location.pathname === "/"
                    ? "bg-white/30 shadow-2xl scale-110 border-2 border-white/50"
                    : "hover:bg-white/20 hover:scale-110 hover:shadow-xl border-2 border-transparent hover:border-white/30"
                }`}
              >
                <span className="text-xl">🏠</span>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/favorites"
                className={`flex items-center gap-2 text-white font-semibold px-5 py-2.5 rounded-2xl transition-all duration-300 ${
                  location.pathname === "/favorites"
                    ? "bg-white/30 shadow-2xl scale-110 border-2 border-white/50"
                    : "hover:bg-white/20 hover:scale-110 hover:shadow-xl border-2 border-transparent hover:border-white/30"
                }`}
              >
                <span className="text-xl">💖</span>
                <span>Favorites</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
