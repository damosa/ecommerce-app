import { createContext, useContext, useEffect, useState } from "react";

const CartContextProvider = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const setCartLocalStorage = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    const addProductToCart = (product) => {
        const { id, attributes: { price, name } } = product;
        const includeProduct = cart.some(item => item.id === id);
        if (includeProduct) {
            handleQuantity(id);
        } else {
            const newObjectProduct = { id, name, price, quantity: 1 };
            const copyCart = JSON.parse(JSON.stringify(cart));
            copyCart.push(newObjectProduct);
            setCart(copyCart);
            setCartLocalStorage(copyCart);
        }
    }

    const handleQuantity = (productId, add = true) => {
        const newCart = cart.filter(item => {
            if (item.id === productId) {
                const { quantity } = item;
                if (add) {
                    item.quantity = quantity + 1;
                } else {
                    item.quantity = quantity - 1;
                }
            }
            return item.quantity !== 0;
        });
        setCart(newCart);
        setCartLocalStorage(newCart);
    }

    useEffect(() => {
        const newtotal = cart.reduce((acu, value) => acu + ((value.price * value.quantity) || 0), 0);
        setTotal(newtotal);
    }, [cart])

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem('cart'));
        if(localCart) {
            setCart(localCart);
        }
    }, [])

    return (
        <CartContextProvider.Provider value={{ cart, addProductToCart, total, handleQuantity }}>
            {children}
        </CartContextProvider.Provider>
    )
}

export const useCartContext = () => {
    const context = useContext(CartContextProvider);
    if (!context) {
        throw new Error('CartProvider is required');
    }

    return context;
}

export default CartProvider;