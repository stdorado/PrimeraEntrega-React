import React, { createContext, useState } from 'react'

export const CartContext = createContext({
    Cart:[]
})


export function CartProvider({children}) {

const [Cart, SetCart] = useState([])

console.log(Cart)

const AgregarItem = (item,quantity) =>{
    if(!isInCart(item.Id) ){
        SetCart(prev => [...prev, {...item,quantity}])
    }else{
        console.error("El Producto ya fue agregado")
    }
}
const EliminarItem = (itemId) =>{
    const actualizarCarro = Cart.filter(prod => prod.id !== itemId)
    SetCart(actualizarCarro)
}

const vaciarCarro = ()=>{
    SetCart([])
}

const isInCart = (itemId)=>{
    return Cart.some(prod => prod.id === itemId)
}

  return (
    <CartContext.Provider value={{Cart,AgregarItem,EliminarItem,vaciarCarro }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider