import "./checkout-item.styles.scss";
import {CartContext} from "../../context/cart.context";
import {useContext} from "react";
export const CheckoutItem = ({cartItem})=>{
    const {increaseItemQuantity, decreaseItemQuantity, deleteProduct} = useContext(CartContext);
    const {name, imageUrl, price, quantity} = cartItem;
    const increment = ()=> increaseItemQuantity(cartItem);
    const decrement = ()=> decreaseItemQuantity(cartItem);
    const remove = ()=> deleteProduct(cartItem);
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={decrement}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={increment}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={remove}>&#10005;</div>
        </div>
    )
}
