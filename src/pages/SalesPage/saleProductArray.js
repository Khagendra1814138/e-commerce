import { AllProductsArray } from "../../assets/productsArray/productsArrayMerge";

export const SaleProductsArray = AllProductsArray.filter(onlySaleProducts => {
    return onlySaleProducts.status==="Sale";
})

