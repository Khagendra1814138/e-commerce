import React from 'react';
import {useNavigate} from "react-router-dom";

import "./ProductsByBrands.css";

import { Product } from '../MenSection/products';
import { AdidasCreps } from './brandsFilter';

import AdidasHeaderImg from "../../images/brandHeader/adidas.jpg";
import { ArrowLeft } from 'react-feather';
import { ArrowRight } from 'react-feather';

function AdidasProducts() {
  const navigate = useNavigate();

  return (
    <div className="productsByBrandsPage">

      <header className='brandHeader' style={{backgroundImage: `url(${AdidasHeaderImg})`}}>
        <h1>Adidas Creps</h1>
      </header>
     
      <div className='productDisplayWrapper'>
        <button className='prevNxtBtn' onClick={() => navigate("/PumaProducts")}>Puma <ArrowLeft size={50}/></button>

        <div className="ProductDisplay"> {AdidasCreps.map((product) => (
            <Product data={product}/>
          ))} 
        </div>

        <button className='prevNxtBtn' onClick={() => navigate("/NikeProducts")}>Nike <ArrowRight size={50}/></button>
      </div>
    </div>
  );
}

export default AdidasProducts;