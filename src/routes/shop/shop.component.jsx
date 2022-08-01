import {useContext} from "react";
import {ProductContext} from "../../context/products.component";
import {ProductCard} from "../../components/product-card/product-card.component";
import "./shop.styles.scss"
export const Shop = ()=>{
    const {products} = useContext(ProductContext);
    return (
        <div className="products-container">
            {products.map(product=>{
                return (
                    <ProductCard key={product.id} product={product}/>
                )
            })}
        </div>
    );

}
