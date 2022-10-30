import {
    AddToCartButton,
    ProductCardContainer,
    ProductCardFooter,
    ProductImage,
    ProductName,
    ProductPrice
} from "./product-card.styles";
import {Button} from "../button/button.component";
import {CartContext} from "../../context/cart.context";
import {useContext} from "react";

export const ProductCard = ({product, ...otherProps}) => {
    const {name, imageUrl, price} = product;
    const {addItemToCart} = useContext(CartContext);
    const addToCart = ()=>addItemToCart(product);
    return (
        <ProductCardContainer>
            <ProductImage src={imageUrl} alt={`${name}`}/>
            <ProductCardFooter>
                <ProductName>{name}</ProductName>
                <ProductPrice>${price}</ProductPrice>
            </ProductCardFooter>
            <AddToCartButton buttonType="inverted" onClick={addToCart}>Add to cart</AddToCartButton>
        </ProductCardContainer>
    );
}
