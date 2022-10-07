import {createContext, useState} from "react";


const addCartItem = (cartItems, product) => {

    const itemFound = cartItems.find(({id}) => id === product.id);
    if (itemFound) {
        return cartItems.map(item => {
            return item.id === product.id ? {...item, quantity: item.quantity + 1} : item;
        })
    }
    return [...cartItems, {...product, quantity: 1}];
}
export const CartContext = createContext(
    {
        isCartOpen: false,
        setIsCartOpen: () => {
        },
        cartItems: [],
        addItemToCart: () => {
        }
    }
);

export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
    }
    const getCartCount = () => cartItems.length;
    const value = {isCartOpen, setIsCartOpen, addItemToCart, getCartCount, cartItems}
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
