import {AllProductsArray} from "../../assets/productsArray/productsArrayMerge";

export const NewProducts = AllProductsArray.filter(newShoes =>{
    return newShoes.status==="New";
})
