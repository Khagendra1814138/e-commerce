import React from "react";

import "../../styles/MensPage.css";
import "../../styles/SwiperGlobal.css";
import "../../styles/SideFilter.css";
import "../../styles/ProductCard.css";
import "../../styles/CSScomponents/Trending.css";

import { PRODUCTS } from "./MensProduct";
import { Product } from "./products";
import { TrendingCreps } from "../../components/trendingShoesFilter";

import { Menu } from 'react-feather';


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
          <div className="sideFilterFrame">
            <div className="sideFilterIcon">Side Filter <Menu className="sfIcon" size={30} color="black"/></div>
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