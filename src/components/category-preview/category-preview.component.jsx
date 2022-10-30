import {ProductCard} from "../product-card/product-card.component";
import {Link} from "react-router-dom";
import {CategoryPreviewContainer, CategoryPreview as Preview, CategoryPreviewTitle} from "./category-preview.styles";

export const CategoryPreview = ({title, products}) => {
    return (
        <CategoryPreviewContainer>
            <CategoryPreviewTitle as="h2"><Link to={`${title}`}>{title.toUpperCase()}</Link></CategoryPreviewTitle>
            <Preview>
                {
                    (products.filter((_, index) => index < 4)).map((product) => {
                        return <ProductCard key={product.id} product={product}/>
                    })
                }
            </Preview>
        </CategoryPreviewContainer>
    );
}
