import React from "react";

import "../../styles/KidsPage.css";
import "../../styles/SideFilter.css";
import "../../styles/ProductCard.css";
import "../../styles/CSScomponents/Trending.css"

import { PRODUCTS } from "../../pages/MenSection/MensProduct";
import { Product } from "../../pages/MenSection/products";


function KidsPage() {
    return (
      <div className="KidsPage">

        <section className="trendingThisWeekSection">
          <h1>Kids Trending This Week</h1>
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

        <h1>KIDS FOOTWARE</h1>

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