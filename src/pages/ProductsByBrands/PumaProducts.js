import React from 'react';
import {useNavigate} from "react-router-dom";

import "./ProductsByBrands.css";

import { Product } from '../MenSection/products';
import { PumaCreps } from './brandsFilter';

import PumaHeaderImg from "../../images/brandHeader/puma.jpg"
import { ArrowLeft } from 'react-feather';
import { ArrowRight } from 'react-feather';

function PumaProducts() {
  const navigate = useNavigate();
  
  return (
    <div className="productsByBrandsPage">

      <header className='brandHeader' style={{backgroundImage: `url(${PumaHeaderImg})`}}>
        <h1>Puma Creps</h1>
      </header>

        <div className='productDisplayWrapper'>
          <button className='prevNxtBtn' onClick={() => navigate("/NikeProducts")}>Nike <ArrowLeft size={50}/></button>
          
          <div className="ProductDisplay"> {PumaCreps.map((product) => (
              <Product data={product}/>
              ))} 
          </div>

          <button className='prevNxtBtn' onClick={() => navigate("/AdidasProducts")}>Adidas <ArrowRight size={50}/></button>
        </div>
    </div>
  );
}

export default PumaProducts;