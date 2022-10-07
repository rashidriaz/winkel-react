import "./product-card.styles.scss";
import {Button} from "../button/button.component";
import {CartContext} from "../../context/cart.context";
import {useContext} from "react";

export const ProductCard = ({product, ...otherProps}) => {
    const {name, id, imageUrl, price} = product;
    const {addItemToCart} = useContext(CartContext);
    const addToCart = ()=>addItemToCart(product);
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button buttonType="inverted" onClick={addToCart}>Add to cart</Button>
        </div>
    );
}
