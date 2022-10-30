import {CartDropDownContainer, CartItemsContainer, CenteredText} from "./cart-dropdown.styles";

import {Button} from "../button/button.component";
import {CartItem} from "../cart-item/cart-item.component";
import {useNavigate} from "react-router-dom";
import {Fragment, useContext} from "react";
import {CartContext} from "../../context/cart.context";

export const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    const gotoCheckoutHandler = () => {
        navigate("/checkout");
    }
    return (
        <CartDropDownContainer>
            {cartItems.length?(<Fragment>
                <CartItemsContainer>
                    {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
                </CartItemsContainer>
                <Button buttonType="default" onClick={gotoCheckoutHandler}>Checkout</Button>
            </Fragment>): (
                <CenteredText>Cart is empty!</CenteredText>
            )}
        </CartDropDownContainer>
    );
}
