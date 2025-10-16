import React, { useState } from 'react';
import { Eye } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, onProductClick, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onProductClick(product)}
    >
      <div className="p-6">
        <div className="text-6xl mb-4 text-center">{product.image}</div>
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">{product.price.toLocaleString()}₽</span>
          <div className="text-yellow-400">{'⭐'.repeat(product.rating)}</div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          В корзину
        </button>
      </div>

      {/* Кнопка быстрого просмотра при наведении */}
      {isHovered && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-200 hover:scale-110 animate-fadeIn"
          title="Быстрый просмотр"
        >
          <Eye size={20} className="text-blue-600" />
        </button>
      )}
    </div>
  );
};

export default ProductCard;