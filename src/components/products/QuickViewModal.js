import React from 'react';
import { X, ShoppingCart, Maximize2 } from 'lucide-react';

const QuickViewModal = ({ product, onClose, onAddToCart, onOpenFull }) => {
  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl max-w-md w-full p-6 animate-fadeIn shadow-2xl" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold pr-8">{product.name}</h3>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-100 rounded-lg flex-shrink-0"
          >
            <X size={20} />
          </button>
        </div>

        <div className="text-6xl mb-4 text-center">{product.image}</div>
        
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{product.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-blue-600">
            {product.price.toLocaleString()}₽
          </span>
          <div className="text-yellow-400 text-lg">
            {'⭐'.repeat(product.rating)}
          </div>
        </div>

        <div className="space-y-2">
          <button
            onClick={() => {
              onAddToCart(product);
              onClose();
            }}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2"
          >
            <ShoppingCart size={20} />
            <span>Добавить в корзину</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenFull(product);
            }}
            className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition flex items-center justify-center space-x-2"
          >
            <Maximize2 size={20} />
            <span>Подробнее</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;