import React from 'react';
import { Home } from 'lucide-react';
import { CATEGORIES } from '../../data/constants';

const Breadcrumbs = ({ isHomePage, selectedCategory, setSelectedCategory, selectedProduct, setSelectedProduct, searchQuery, setSearchQuery, onGoToHome }) => {
  if (isHomePage && !selectedProduct) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-600">
      <div className="flex items-center space-x-2 flex-wrap">
        <button 
          onClick={onGoToHome}
          className="flex items-center space-x-1 hover:text-blue-600 transition"
        >
          <Home size={16} />
          <span>Главная</span>
        </button>
        
        {!isHomePage && (
          <>
            <span>/</span>
            
            {selectedCategory !== 'all' ? (
              <>
                <button
                  onClick={() => { setSelectedCategory('all'); setSelectedProduct(null); }}
                  className="hover:text-blue-600 transition"
                >
                  Каталог
                </button>
                <span>/</span>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className={selectedProduct ? 'hover:text-blue-600 transition' : 'text-gray-900 font-medium'}
                >
                  {CATEGORIES.find(c => c.id === selectedCategory)?.name}
                </button>
              </>
            ) : (
              <span className="text-gray-900 font-medium">Каталог</span>
            )}
            
            {selectedProduct && (
              <>
                <span>/</span>
                <span className="text-gray-900 font-medium">{selectedProduct.name}</span>
              </>
            )}
            
            {searchQuery && !selectedProduct && (
              <>
                <span>/</span>
                <span className="text-blue-600 font-medium">Поиск: "{searchQuery}"</span>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Breadcrumbs;