import { createContext, useState } from "react";

export const CartContext = createContext();


export const CartContextProvider = ({children}) =>{
    const [cartList,setCartList] = useState([])
    const [productId, setProductID] = useState([]);
    const settingCartList = (item) => {
        setCartList(item);
    }
    
    return <CartContext.Provider
    value={{
        cartList,
        settingCartList,
        productId,
        setProductID    }}
    >
        {children}
    </CartContext.Provider>
}