import React from 'react';

import "./trendingProducts.css";
import "../ProductsByBrands/ProductsByBrands.css";

import { TrendingProductsSideFilter } from '../../components/sideProductsFilter/trendingSideProductsFilter';

import TrendingHeaderImg from "../../images/brandHeader/trending.jpg";


function TrendingProductsPage() {

  return (
    <div className="trendingProductsPage">

      <header className="trendingProductsHeader">
        <h1>TRENDING FOOTWEAR</h1>
        <h2>Look fresh with the most loved creps.</h2>
      </header>

      <image className='brandHeader' style={{backgroundImage: `url(${TrendingHeaderImg})`}}>
      </image>
     
      <div className='productDisplayWrapper'>
        <TrendingProductsSideFilter/>
      </div>
    </div>
  );
}

export default TrendingProductsPage;