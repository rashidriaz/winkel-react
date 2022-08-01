import Products from "../shop-data.json";
import {createContext, useState} from "react";

export const ProductContext = createContext({
    products: [],
});

export const ProductProvider = ({children})=>{
        const [products, setProducts] = useState(Products);
        const value = {products}
    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}
