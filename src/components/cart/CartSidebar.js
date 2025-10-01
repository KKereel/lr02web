import React from 'react';
import { X, ShoppingCart, Trash2 } from 'lucide-react';
import CartItem from './CartItem';

const CartSidebar = ({ show, onClose, cart, onUpdateQuantity, onRemove, totalPrice, onClearCart, onCheckout }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose}>
      <div
        className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl animate-slideInRight"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Корзина</h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
                <X size={24} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center text-gray-500 mt-12">
                <ShoppingCart size={64} className="mx-auto mb-4 opacity-50" />
                <p>Корзина пуста</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={onUpdateQuantity}
                    onRemove={onRemove}
                  />
                ))}
                <button
                  onClick={onClearCart}
                  className="w-full mt-4 bg-red-50 text-red-600 py-2 rounded-lg hover:bg-red-100 transition flex items-center justify-center space-x-2"
                >
                  <Trash2 size={18} />
                  <span>Очистить корзину</span>
                </button>
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-6 border-t bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg">Итого:</span>
                <span className="text-2xl font-bold text-blue-600">{totalPrice.toLocaleString()}₽</span>
              </div>
              <button 
                onClick={onCheckout}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition text-lg font-semibold hover:shadow-lg"
              >
                Оформить заказ
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;