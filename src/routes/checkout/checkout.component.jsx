import {CheckoutContainer, CheckoutHeader, HeaderBlock, TotalPriceText} from "./checkout.styles";
import {CartContext} from "../../context/cart.context";
import {useContext} from "react";
import {CheckoutItem} from "../../components/checkout-item/checkout-item.component"

export const Checkout = () => {
    const {cartItems, cartTotal} = useContext(CartContext);
    let total = 0;

    return (
        <CheckoutContainer>
            <CheckoutHeader className="checkout-header">
                <HeaderBlock className="header-block"><span>Product</span></HeaderBlock>
                <HeaderBlock className="header-block"><span>Description</span></HeaderBlock>
                <HeaderBlock className="header-block"><span>Quantity</span></HeaderBlock>
                <HeaderBlock className="header-block"><span>Price</span></HeaderBlock>
                <HeaderBlock className="header-block"><span>Remove</span></HeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map((item) => {
                    total += item.price * item.quantity;
                    return <CheckoutItem key={item.id} cartItem={item}/>
                })
            }
            <TotalPriceText className="total">Total: ${cartTotal}</TotalPriceText>
        </CheckoutContainer>
    )
}
