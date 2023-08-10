
import { PRODUCTS } from "../pages/MenSection/MensProduct";


export const TrendingCreps = PRODUCTS.filter(trendingProducts => {
        return trendingProducts.trending === "Yes";
    }
);