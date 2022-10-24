import {createContext, useState, useEffect} from "react";


const removeCartItem = (cartItems, product) => cartItems.filter(item => item.id !== product.id);

const incrementItemQuantity = (cartItems, product) => {
    return cartItems.map(item => {
        const itemFound = item.id === product.id;
        return itemFound ? {...item, quantity: item.quantity + 1} : item;
    });
}
const decrementItemQuantity = (cartItems, product) => {
    const itemFound = cartItems.find(({id}) => id === product.id);
    if (itemFound?.quantity > 1) {
        return cartItems.map(item => {
            return item.id === product.id ? {...item, quantity: item.quantity - 1} : item;
        })
    } else {
        return removeCartItem(cartItems, product);
    }
}

const addCartItem = (cartItems, product) => {

    const itemFound = cartItems.find(({id}) => id === product.id);
    if (itemFound) {
        return incrementItemQuantity(cartItems, product);
    }
    return [...cartItems, {...product, quantity: 1}];
}

export const CartContext = createContext(
    {
        isCartOpen: false,
        setIsCartOpen: () => {
        },
        cartItems: [],
        cartCount: 0,
        cartTotal: 0,
        addItemToCart: () => {
        }
    }
);

export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    useEffect(() => {
        setCartCount(cartItems.reduce((total, {price, quantity}) => total + quantity, 0));
        setCartTotal(cartItems.reduce((total, {price, quantity}) => total + (price * quantity), 0))
    }, [cartItems, setCartCount, setCartTotal])
    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
    }
    const increaseItemQuantity = (product) => setCartItems(incrementItemQuantity(cartItems, product));
    const decreaseItemQuantity = (product) => setCartItems(decrementItemQuantity(cartItems, product));
    const deleteProduct = (product) => setCartItems(removeCartItem(cartItems, product));
    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        increaseItemQuantity,
        decreaseItemQuantity,
        deleteProduct,
        cartCount, cartTotal,
    };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
