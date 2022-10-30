import {CartItemContainer, CartItemDetail, CartItemImage, CartItemName} from "./cart-item.styles";

export const CartItem = ({cartItem: {name, quantity, imageUrl, price}}) => {
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={`${name}`}/>
            <CartItemDetail>
            <CartItemName>{name}</CartItemName>
            <span className="price">{quantity} x ${price}</span>
            </CartItemDetail>
        </CartItemContainer>
    )
}
