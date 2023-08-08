import React, { createContext, useState } from 'react';

export const CartContext = createContext({
  Cart: []
});

export function CartProvider({ children }) {
  const [Cart, setCart] = useState([]);

  const AgregarItem = (item, quantity) => {
    
    if (!isInCart(item.Id)) {
      setCart(prev => [...prev, { ...item, quantity }]);
    } else {
      console.error("El Producto ya fue agregado");
    }
  };

  const EliminarItem = (itemId) => {
    const actualizarCarro = Cart.filter(prod => prod.id !== itemId);
    setCart(actualizarCarro);
  };

  const vaciarCarro = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return Cart.some(prod => prod.id === itemId);
  };

  const totalQuantity = () => {
    return Cart.reduce((total, item) => total + item.quantity, 0);
  };

  const total = () => {
    return Cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ Cart, AgregarItem, EliminarItem, vaciarCarro, totalQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;