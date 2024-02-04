import React from 'react';

import "./trendingProducts.css";
import "../ProductsByBrands/ProductsByBrands.css";

import { TrendingProductsSideFilter } from '../../components/sideProductsFilter/trendingSideProductsFilter';

import TrendingHeaderImg from "../../images/brandHeader/trending.jpg";


function TrendingProductsPage() {

  return (
    <div className="trendingProductsPage">

      <header className='brandHeader' style={{backgroundImage: `url(${TrendingHeaderImg})`}}>
        <h1>Trending Creps</h1>
      </header>
     
      <div className='productDisplayWrapper'>
        <TrendingProductsSideFilter/>
      </div>
    </div>
  );
}

export default TrendingProductsPage;