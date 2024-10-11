'use client';
import { useState, useMemo } from 'react';
import ProductCard from './components/productCard';
import productsData from './data/products';
import Landing from './pages/landing';
import ProductDisplay from './components/productDisplay'; // Ensure you have this component

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const categories = useMemo(() => {
    return ['All', ...new Set(productsData.map(product => product.category))];
  }, []);

  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, productsData]);

  const handleOpenPopup = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <Landing />

      <div className="container mx-auto px-4 py-8">
        <h1 className="catalogue text-3xl font-bold mb-6 text-center">MELOWN AFRICA LIMITED</h1>

        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-6 flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === category
                  ? 'bg-purple-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenPopup={handleOpenPopup} // Pass function to ProductCard
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No products found.</p>
          )}
        </div>

        {/* Popup for Product Display */}
        {isPopupOpen && (
          <ProductDisplay product={selectedProduct} onClose={handleClosePopup} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
