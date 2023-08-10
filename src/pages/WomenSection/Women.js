import React from "react";

import "../../styles/WomensPage.css";
import "../../styles/SideFilter.css";
import "../../styles/ProductCard.css";
import "../../styles/CSScomponents/Trending.css"

import { PRODUCTS } from "../../pages/MenSection/MensProduct";
import { Product } from "../../pages/MenSection/products";

function WomensPage() {
    return (
      <div className="WomensPage">

      <h1>WOMENS FOOTWARE</h1>
        <section className="trendingThisWeekSection_Women">
          <h1>Women's Trending This Week</h1>
          <div className='trendingProductsFrame'>
              {[...PRODUCTS.map((products) => (
              <div className='womenTrendingCardsWrapper'> 
                <img className="card"src={products.productImage} alt='img'/>
                <div className='productName'> {products.productName} </div>
              </div>
              )),]}
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
  
  export default WomensPage;