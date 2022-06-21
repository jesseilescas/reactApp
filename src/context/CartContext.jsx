import { createContext } from "react";
import { useState } from "react";

 export const CartContext = createContext([])
 

export const CartContextProvider = ({children}) =>{
    //estados y funciones para cart
    const [cart, setCart] = useState([])
    
    return(
        <CartContext.Provider
        
        >
            {children}
            
        </CartContext.Provider>
    )
}