import React from 'react';

const ProductCard = ({ product, onAddToCart, onProductClick }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
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
    </div>
  );
};

export default ProductCard;
