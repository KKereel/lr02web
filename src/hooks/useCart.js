import { useState } from 'react';
import CartUtils from '../utils/CartUtils';

const useCart = () => {
  const [cart, setCart] = useState([]);

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