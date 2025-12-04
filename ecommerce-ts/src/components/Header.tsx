import { useCart } from '../context/CartContext';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header = ({ currentPage, onNavigate }: HeaderProps) => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          🛒 E-Commerce Store
        </h1>
        <nav className="flex gap-4">
          <button 
            onClick={() => onNavigate('products')} 
            className={`px-5 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
              currentPage === 'products' 
                ? 'bg-blue-600 shadow-lg transform scale-105' 
                : 'hover:bg-slate-700'
            }`}
          >
            🏪 Products
          </button>
          <button 
            onClick={() => onNavigate('categories')} 
            className={`px-5 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
              currentPage === 'categories' 
                ? 'bg-blue-600 shadow-lg transform scale-105' 
                : 'hover:bg-slate-700'
            }`}
          >
            📂 Categories
          </button>
          <button 
            onClick={() => onNavigate('cart')} 
            className={`px-5 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 relative ${
              currentPage === 'cart' 
                ? 'bg-blue-600 shadow-lg transform scale-105' 
                : 'hover:bg-slate-700'
            }`}
          >
            🛒 Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
