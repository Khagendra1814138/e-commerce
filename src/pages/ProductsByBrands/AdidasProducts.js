import React from 'react';

import "./ProductsByBrands.css";

import { Product } from '../MenSection/products';
import { AdidasCreps } from './brandsFilter';

function AdidasProducts() {

  return (
    <div className="productsByBrandsPage">

      <h1>Adidas Creps</h1>
        <div className='productDisplayWrapper'>
          <div className="ProductDisplay"> {AdidasCreps.map((product) => (
              <Product data={product}/>
            ))} 
          </div>
        </div>
    </div>
  );
}

export default AdidasProducts;