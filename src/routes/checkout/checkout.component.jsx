import "./checkout.styles.scss";
import {CartContext} from "../../context/cart.context";
import {useContext} from "react";
import {CheckoutItem} from "../../components/checkout-item/checkout-item.component"

export const Checkout = ()=>{
    const {cartItems, cartTotal} = useContext(CartContext);
    let total = 0;

    return (
        <div className='checkout-container'>
           <div className="checkout-header">
               <div className="header-block"><span>Product</span></div>
               <div className="header-block"><span>Description</span></div>
               <div className="header-block"><span>Quantity</span></div>
               <div className="header-block"><span>Price</span></div>
               <div className="header-block"><span>Remove</span></div>
           </div>
                {
                    cartItems.map((item)=>{
                        total += item.price * item.quantity;
                        return <CheckoutItem key={item.id} cartItem={item}/>
                    })
                }
                <span className="total">Total: ${cartTotal}</span>
        </div>
    )
}
