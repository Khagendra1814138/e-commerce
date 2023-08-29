import React from 'react';
import {useNavigate} from "react-router-dom";

import "./ProductsByBrands.css";

import { Product } from '../MenSection/products';
import { NikeCreps } from './brandsFilter';

import NikeHeaderImg from "../../images/brandHeader/nike.jpg"
import { ArrowLeft } from 'react-feather';
import { ArrowRight } from 'react-feather';

function NikeProducts() {
  const navigate = useNavigate();

  return (
    <div className="productsByBrandsPage">

      <header className='brandHeader' style={{backgroundImage: `url(${NikeHeaderImg})`}}>
        <h1>Nike Creps</h1>
      </header>

        <div className='productDisplayWrapper'>
          <button className='prevNxtBtn' onClick={() => navigate("/AdidasProducts")}>Adidas <ArrowLeft size={50}/></button>

          <div className="ProductDisplay"> {NikeCreps.map((product) => (
                  <Product data={product}/>
              ))} 
          </div>

          <button className='prevNxtBtn' onClick={() => navigate("/PumaProducts")}>Puma <ArrowRight size={50}/></button>
        </div>
    </div>
  );
}

export default NikeProducts;