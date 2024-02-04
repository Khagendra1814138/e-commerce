import React from "react";

import "../../styles/WomensPage.css";
import "../../styles/ProductCard.css";
import "../../styles/CSScomponents/Trending.css"

import { TrendingCreps } from "../../components/trendingShoesFilter";
import { SideProductsFilter } from "../../components/sideProductsFilter/sideProductsFilter";

function WomensPage() {
    return (
      <div className="WomensPage">

      <h1>WOMENS FOOTWEAR</h1>
        <section className="trendingThisWeekSection_Women">
          <h1>Women's Trending This Week</h1>
          <div className='trendingProductsFrame'>
              {TrendingCreps.map((trendingCreps) => (

                <div className='womenTrendingCardsWrapper'> 
                  <img className="card"src={trendingCreps.productImage} alt='img'/>
                  <div className='productName'> {trendingCreps.productName} </div>
                  <div className='productName'> £{trendingCreps.price} </div>
                </div>

              ))}
          </div>
        </section>

        <SideProductsFilter/>
  
      </div>
    );
  }
  
  export default WomensPage;