
import { AllProductsArray } from "../../assets/productsArray/productsArrayMerge";

export const AdidasCreps = AllProductsArray.filter(adidasProducts => {
    return adidasProducts.brand === "Adidas";
});

export const NikeCreps = AllProductsArray.filter(nikeProducts => {
    return nikeProducts.brand === "Nike";
});

export const PumaCreps = AllProductsArray.filter(pumaProducts => {
    return pumaProducts.brand === "Puma";
});