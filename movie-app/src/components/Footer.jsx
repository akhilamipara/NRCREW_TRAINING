function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white mt-16">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-5xl">🎬</span>
              <h3 className="text-2xl font-bold">Movie Search</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Discover, explore, and save your favorite movies and series. 
              Your ultimate destination for movie information powered by OMDB API.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span className="text-2xl">🔗</span> Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <span>🏠</span> Home
                </a>
              </li>
              <li>
                <a href="/favorites" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <span>💖</span> Favorites
                </a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span className="text-2xl">✨</span> Features
            </h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="flex items-center gap-2">
                <span>🔍</span> Search Movies & Series
              </li>
              <li className="flex items-center gap-2">
                <span>💖</span> Save Favorites
              </li>
              <li className="flex items-center gap-2">
                <span>⭐</span> Rate Movies
              </li>
              <li className="flex items-center gap-2">
                <span>📊</span> View Ratings & Details
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/80 text-sm flex items-center gap-2">
            <span>©</span> {currentYear} Movie Search. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-white/80">
            <span>Made with</span>
            <span className="text-red-400 text-xl">💖</span>
            <span>by Akhil Amipara</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
