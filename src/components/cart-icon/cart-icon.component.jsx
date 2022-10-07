import "./cart-icon.styles.scss"
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";

export const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, getCartCount} = useContext(CartContext);

    const toggleIsCartOpen = ()=>setIsCartOpen(!isCartOpen);
    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{getCartCount()}</span>
        </div>
    )
}
