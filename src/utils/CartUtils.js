class CartUtils {
  static addItem(cart, product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      return cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
    return [...cart, { ...product, quantity: 1 }];
  }

  static removeItem(cart, productId) {
    return cart.filter(item => item.id !== productId);
  }

  static updateQuantity(cart, productId, quantity) {
    if (quantity <= 0) {
      return CartUtils.removeItem(cart, productId);
    }
    return cart.map(item =>
      item.id === productId ? { ...item, quantity } : item
    );
  }

  static getTotalPrice(cart) {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  static getTotalItems(cart) {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }
}

export default CartUtils;