import React from 'react';

import "../ProductsByBrands/ProductsByBrands.css";

import { Product } from '../MenSection/products';
import { TrendingCreps } from '../../components/trendingShoesFilter';

import TrendingHeaderImg from "../../images/brandHeader/trending.jpg";


function TrendingProductsPage() {

  return (
    <div className="TrendingProductsPage">

      <header className='brandHeader' style={{backgroundImage: `url(${TrendingHeaderImg})`}}>
        <h1>Trending Creps</h1>
      </header>
     
      <div className='productDisplayWrapper'>
        <div className="ProductDisplay"> {TrendingCreps.map((product) => (
            <Product data={product}/>
          ))} 
        </div>
      </div>
    </div>
  );
}

export default TrendingProductsPage;