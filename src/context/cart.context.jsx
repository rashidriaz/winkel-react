import {createContext, useState} from "react";


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
    const increaseItemQuantity = (product) => setCartItems(incrementItemQuantity(cartItems, product));
    const decreaseItemQuantity = (product) => setCartItems(decrementItemQuantity(cartItems, product));
    const deleteProduct = (product) => setCartItems(removeCartItem(cartItems, product));
    const getCartCount = () => cartItems.length;
    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        getCartCount,
        cartItems,
        increaseItemQuantity,
        decreaseItemQuantity,
        deleteProduct
    };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
