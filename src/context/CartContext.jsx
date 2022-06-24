import { createContext, useContext } from "react";
import { useState } from "react";

 const CartContext = createContext([])
 export const useCartContext = ()=> useContext(CartContext)
 

export const CartContextProvider = ({children}) =>{
    //estados y funciones para cart
    const [cart, setCart] = useState([])
    const addToCart =(item)=>{
        setCart([
            ...cart,
            item
        ])
    }
    return(
        <CartContext.Provider
        value={{
            cart,
            addToCart
        }}
        >
            {children}
            
        </CartContext.Provider>
    )
}