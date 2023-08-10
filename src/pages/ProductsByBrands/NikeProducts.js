import React from 'react';

import "./ProductsByBrands.css";

import { Product } from '../MenSection/products';
import { NikeCreps } from './brandsFilter';

function NikeProducts() {

  return (
    <div className="productsByBrandsPage">

      <h1>Nike Creps</h1>
        <div className='productDisplayWrapper'>
            <div className="ProductDisplay"> {NikeCreps.map((product) => (
                    <Product data={product}/>
                ))} 
            </div>
        </div>
    </div>
  );
}

export default NikeProducts;