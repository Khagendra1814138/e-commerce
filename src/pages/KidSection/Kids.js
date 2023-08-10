import React from "react";

import "../../styles/KidsPage.css";
import "../../styles/SideFilter.css";
import "../../styles/ProductCard.css";
import "../../styles/CSScomponents/Trending.css"

import { PRODUCTS } from "../../pages/MenSection/MensProduct";
import { Product } from "../../pages/MenSection/products";

const trending = PRODUCTS.filter(trendingProducts => {
  return trendingProducts.trending === "Yes";
});

function KidsPage() {
    return (
      <div className="KidsPage">

      

      <h1>KIDS FOOTWARE</h1>

        <section className="trendingThisWeekSection_Kids">
          <h1>Kid's Trending This Week</h1>
          <div className='trendingProductsFrame'>
            {trending.map((trendingCreps) => (

              <div className='kidTrendingCardsWrapper'> 
                <img className="card"src={trendingCreps.productImage} alt='img'/>
                <div className='productName'> {trendingCreps.productName} </div>
              </div>
         
            ))}
          </div>
        </section>

        <section className="productDisplayFrame">
          <div className="sideFilterFrame"> Side Filter
            <box className="filterOptions"> Gender </box>
            <box className="filterOptions"> Colors </box>
            <box className="filterOptions"> Size </box>
            <box className="filterOptions"> Sport </box>
            <box className="filterOptions"> Sales & Deal </box>
          </div>
          
          <div className="ProductDisplay"> {PRODUCTS.map((product) => (
              <Product data={product}/>
            ))} 
          </div>

        </section>
  
      </div>
    );
  }
  
  export default KidsPage;