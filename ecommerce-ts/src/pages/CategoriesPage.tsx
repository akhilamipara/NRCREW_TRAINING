import { categories, products } from '../data/products';
import { Category } from '../types';

interface CategoriesPageProps {
  onCategorySelect: (category: Category) => void;
}

interface CategoryData {
  name: string;
  count: number;
  icon: string;
}

const CategoriesPage = ({ onCategorySelect }: CategoriesPageProps) => {
  const categoryData: CategoryData[] = categories
    .filter(cat => cat !== 'All')
    .map(category => ({
      name: category,
      count: products.filter(p => p.category === category).length,
      icon: getCategoryIcon(category)
    }));

  function getCategoryIcon(category: string): string {
    const icons: Record<string, string> = {
      'Electronics': '📱',
      'Accessories': '🎒',
      'Audio': '🎧',
      'Computer': '💻',
      'Gaming': '🎮',
      'Smart Home': '🏠'
    };
    return icons[category] || '📦';
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
        📂 Browse by Category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* All Products Card */}
        <button
          onClick={() => onCategorySelect('All')}
          className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 text-left"
        >
          <div className="text-5xl mb-4">🛍️</div>
          <h3 className="text-2xl font-bold mb-2">All Products</h3>
          <p className="text-blue-100 text-lg">{products.length} items</p>
        </button>

        {/* Category Cards */}
        {categoryData.map(category => (
          <button
            key={category.name}
            onClick={() => onCategorySelect(category.name as Category)}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 text-left border-2 border-gray-100 hover:border-blue-400"
          >
            <div className="text-5xl mb-4">{category.icon}</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{category.name}</h3>
            <p className="text-gray-600 text-lg">{category.count} items</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
