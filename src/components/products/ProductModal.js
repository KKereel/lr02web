import React from 'react';
import { X } from 'lucide-react';

const ProductModal = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-xl max-w-2xl w-full p-8 animate-fadeIn" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X size={24} />
          </button>
        </div>
        <div className="text-8xl mb-6 text-center">{product.image}</div>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <div className="flex items-center justify-between mb-6">
          <span className="text-3xl font-bold text-blue-600">{product.price.toLocaleString()}₽</span>
          <div className="text-yellow-400 text-2xl">{'⭐'.repeat(product.rating)}</div>
        </div>
        <button
          onClick={() => {
            onAddToCart(product);
            onClose();
          }}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default ProductModal;