import { useState, useEffect } from 'react';
import CartUtils from '../utils/CartUtils';

const CART_STORAGE_KEY = 'techstore_cart';

const useCart = () => {
  // Инициализация корзины из LocalStorage
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Ошибка загрузки корзины из LocalStorage:', error);
      return [];
    }
  });

  // Сохранение корзины в LocalStorage при каждом изменении
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error('Ошибка сохранения корзины в LocalStorage:', error);
    }
  }, [cart]);

  const addToCart = (product) => {
    setCart(prevCart => CartUtils.addItem(prevCart, product));
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => CartUtils.removeItem(prevCart, productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart(prevCart => CartUtils.updateQuantity(prevCart, productId, quantity));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = CartUtils.getTotalPrice(cart);
  const totalItems = CartUtils.getTotalItems(cart);

  return { cart, addToCart, removeFromCart, updateQuantity, clearCart, totalPrice, totalItems };
};

export default useCart;