import React from "react";

import "../../styles/WomensPage.css";
import "../../styles/ProductCard.css";
import "../../styles/CSScomponents/Trending.css"

import { PRODUCTS } from "../../pages/MenSection/MensProduct";
import { Product } from "../../pages/MenSection/products";
import { TrendingCreps } from "../../components/trendingShoesFilter";
import { SideProductsFilter } from "../../components/sideProductsFilter/sideProductsFilter";

function WomensPage() {
    return (
      <div className="WomensPage">

      <h1>WOMENS FOOTWARE</h1>
        <section className="trendingThisWeekSection_Women">
          <h1>Women's Trending This Week</h1>
          <div className='trendingProductsFrame'>
              {TrendingCreps.map((trendingCreps) => (

                <div className='womenTrendingCardsWrapper'> 
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
  
  export default WomensPage;