import {DirectoryItem} from "../directory-item/directory-item.component";
import {CategoriesContainer} from "./directory.styles";
import Categories from "../../categories-data.json";
export const Directory = () => {

    return (
        <CategoriesContainer>

            {Categories.map(category => <DirectoryItem key={category.id} category={category}/>)}
        </CategoriesContainer>
    )
}
