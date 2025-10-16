import React from 'react';
import { Trash2 } from 'lucide-react';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const itemTotal = item.price * item.quantity;
  
  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
      <div className="text-4xl">{item.image}</div>
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>{item.price.toLocaleString()}₽</span>
          <span>×</span>
          <span>{item.quantity}</span>
        </div>
        <p className="text-blue-600 font-bold text-lg mt-1">{itemTotal.toLocaleString()}₽</p>
        <div className="flex items-center space-x-2 mt-2">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
          >
            -
          </button>
          <span className="w-8 text-center font-semibold">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default CartItem;