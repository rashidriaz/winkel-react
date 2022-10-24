import {Fragment, useContext} from "react";
import {CategoriesContext} from "../../context/categories.context";
import {CategoryPreview} from "../../components/category-preview/category-preview.component";


export const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title];
                    return <CategoryPreview key={title} products={products} title={title}/>
                })
            }
        </Fragment>
    );

}
