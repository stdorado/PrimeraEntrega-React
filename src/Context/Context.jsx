import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext({
  Cart: [],
  AgregarItem: () => {},
  EliminarItem: () => {},
  vaciarCarro: () => {},
  totalQuantity: () => 0,
  calcularTotal: () => 0,
});

export function CartProvider({ children }) {
  const [Cart, setCart] = useState([]);

  const AgregarItem = (item, quantity) => {
    console.log("quantity:", quantity);
    if (!isInCart(item.id)) {
      if (quantity <= item.stock) {
        setCart(prev => [...prev, { ...item, quantity }]);
      } else {
        console.error("La cantidad supera el stock disponible");
      }
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

  const calcularTotal = () => {
    return Cart.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ Cart, AgregarItem, EliminarItem, vaciarCarro, totalQuantity, calcularTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export default CartProvider;