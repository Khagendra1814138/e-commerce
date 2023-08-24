
import { AllProductsArray } from "../assets/productsArray/productsArrayMerge";


export const TrendingCreps = AllProductsArray.filter(trendingProducts => {
        return trendingProducts.trending === "Yes";
    }
);