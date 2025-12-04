import { useState } from 'react';
import Header from './components/Header';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CategoriesPage from './pages/CategoriesPage';

function App() {
  const [currentPage, setCurrentPage] = useState('products');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage('products');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
      />
      <main>
        {currentPage === 'products' && (
          <ProductsPage selectedCategory={selectedCategory} />
        )}
        {currentPage === 'cart' && <CartPage />}
        {currentPage === 'categories' && (
          <CategoriesPage onCategorySelect={handleCategorySelect} />
        )}
      </main>
    </div>
  );
}

export default App;
