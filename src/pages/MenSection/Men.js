import React from "react";

import "../../styles/MensPage.css";
import "../../styles/SwiperGlobal.css";
import "../../components/sideProductsFilter/sideProductsFilter.css";
import "../../styles/ProductCard.css";
import "../../styles/CSScomponents/Trending.css";

import { PRODUCTS } from "./MensProduct";
import { Product } from "./products";
import { TrendingCreps } from "../../components/trendingShoesFilter";
import { SideProductsFilter } from "../../components/sideProductsFilter/sideProductsFilter";

function MensPage() {
  
  return (
    <div className="MenPage">
      
      {/* <header className="mensHeader">
        <h1>MENS FOOTWARE</h1>
        <image className="focusedProduct">Product Image</image>
      </header> */}
      <h1>MENS FOOTWARE</h1>

      <section className="trendingThisWeekSection">
        <h1>Men's Trending This Week</h1>
        <div className='trendingProductsFrame'>
          {TrendingCreps.map((trendingCreps) => (

            <div className='menTrendingCardsWrapper'> 
              <img className="card"src={trendingCreps.productImage} alt='img'/>
              <div className='productName'> {trendingCreps.productName} </div>
            </div>

          ))}
        </div>
      </section>
      
      <section className="productDisplayFrame">
        <SideProductsFilter/>
        <div className="ProductDisplay"> {PRODUCTS.map((product) => (
            <Product data={product}/>
          ))} 
        </div>

      
      </section>



    </div>
  );
}
  
export default MensPage;