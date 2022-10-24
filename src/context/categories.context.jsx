import {createContext, useState, useEffect} from "react";
import {CategoriesDBService} from "../services/database/db/categoriesDBService";

export const CategoriesContext = createContext({
    categoriesMap: {},
});


export const CategoriesProvider = ({children}) => {
    const categoriesService = new CategoriesDBService();
    const [categoriesMap, setCategoriesMap] = useState({});
    useEffect(() => {
        const getCategories = async () => {
            const categoryMap = await categoriesService.getCategoriesAndProducts();
            setCategoriesMap(categoryMap);
        }
        getCategories();
    },[]);

    const value = {categoriesMap: categoriesMap}
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}
