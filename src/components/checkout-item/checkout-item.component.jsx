import {
    CheckoutItemContainer,
    CheckoutItemImageContainer,
    CheckoutItemImage,
    ItemQuantity,
    ItemQuantityContainer,
    ItemName,
    ArrowButton,
    RemoveButton,
    ItemPrice
} from "./checkout-item.styles";
import {CartContext} from "../../context/cart.context";
import {useContext} from "react";
export const CheckoutItem = ({cartItem})=>{
    const {increaseItemQuantity, decreaseItemQuantity, deleteProduct} = useContext(CartContext);
    const {name, imageUrl, price, quantity} = cartItem;
    const increment = ()=> increaseItemQuantity(cartItem);
    const decrement = ()=> decreaseItemQuantity(cartItem);
    const remove = ()=> deleteProduct(cartItem);
    return (
        <CheckoutItemContainer>
            <CheckoutItemImageContainer>
                <CheckoutItemImage src={imageUrl} alt={`${name}`}/>
            </CheckoutItemImageContainer>
            <ItemName>{name}</ItemName>
            <ItemQuantityContainer>
                <ArrowButton as="div" onClick={decrement}>&#10094;</ArrowButton>
                <ItemQuantity>{quantity}</ItemQuantity>
                <ArrowButton as="div" onClick={increment}>&#10095;</ArrowButton>
            </ItemQuantityContainer>
            <ItemPrice>{price}</ItemPrice>
            <RemoveButton as="div" onClick={remove}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}
