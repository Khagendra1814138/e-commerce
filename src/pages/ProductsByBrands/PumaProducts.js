import React from 'react';

import "./ProductsByBrands.css";

import { Product } from '../MenSection/products';
import { PumaCreps } from './brandsFilter';

function PumaProducts() {

  return (
    <div className="productsByBrandsPage">

      <h1>Puma Creps</h1>
        <div className='productDisplayWrapper'>
            <div className="ProductDisplay"> {PumaCreps.map((product) => (
                <Product data={product}/>
                ))} 
            </div>
        </div>
    </div>
  );
}

export default PumaProducts;