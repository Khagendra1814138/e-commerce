import React from "react";

import "../../styles/MensPage.css";
import "../../styles/SideFilter.css";
import "../../styles/ProductCard.css";
import "../../styles/CSScomponents/Trending.css";

import { PRODUCTS } from "./MensProduct";
import { Product } from "./products";

function MensPage() {
    return (
      <div className="MenPage">
        
        {/* <header className="mensHeader">
          <h1>MENS FOOTWARE</h1>
          <image className="focusedProduct">Product Image</image>
        </header> */}

        <section className="trendingThisWeekSection">
          <h1>Mens Trending This Week</h1>
          <div className='trendingProductsFrame'>
            <div className='trendingCards'>1</div>
            <div className='trendingCards'>2</div>
            <div className='trendingCards'>3</div>
            <div className='trendingCards'>4</div>
            <div className='trendingCards'>5</div>
            <div className='trendingCards'>6</div>
            <div className='trendingCards'>7</div>
            <div className='trendingCards'>8</div>
            </div>
        </section>

        <h1>MENS FOOTWARE</h1>

        <section className="productDisplayFrame">
          <div className="sideFilterFrame"> Side Filter
            <box className="filterOptions"> Gender </box>
            <box className="filterOptions"> Colors </box>
            <box className="filterOptions"> Size </box>
            <box className="filterOptions"> Brand </box>
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
  
  export default MensPage;