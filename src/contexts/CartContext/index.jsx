import { createContext, useContext, useState } from "react";

const CartContextProvider = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    return (
        <CartContextProvider.Provider value={{ cart, setCart, total, setTotal }}>
            {children}
        </CartContextProvider.Provider>
    )
}

export const useCartContext = () => {
    const context = useContext(CartContextProvider);
    if(!context) {
        throw new Error('CartProvider is required');
    }

    return context;
}

export default CartProvider;