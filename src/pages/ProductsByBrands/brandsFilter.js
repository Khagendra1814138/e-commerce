
import { PRODUCTS } from "../MenSection/MensProduct";

export const AdidasCreps = PRODUCTS.filter(adidasProducts => {
    return adidasProducts.brand === "Adidas";
});

export const NikeCreps = PRODUCTS.filter(nikeProducts => {
    return nikeProducts.brand === "Nike";
});

export const PumaCreps = PRODUCTS.filter(pumaProducts => {
    return pumaProducts.brand === "Puma";
});