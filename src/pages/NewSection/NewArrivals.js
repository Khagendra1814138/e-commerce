import React from "react";
import { useState } from 'react';

import "../../styles/NewArrivals.css";
import "../../App.css"

import { PRODUCTS } from "../../pages/MenSection/MensProduct";

  
  export default function NewArrivals() {

    const brands = [
      {
        label: "Nike",
        value: "Nike",
      },
      {
        label: "Adidas",
        value: "Adidas",
      },
      {
        label: "Puma",
        value: "Puma",
      },
    ];

  
    const [selectedBrand, setSelectedBrand] = useState("");

    const BrandFilterCreps = PRODUCTS.filter(filteredCreps => {
      return filteredCreps.brand.includes(selectedBrand);
    }

    );
      return(
        <div className="NewArrivals">
          <body className="snappingWrapper">
            <div className="section">

              <select className="brandselector"
                multiple={true}
                value={selectedBrand}
                onChange={e => {
                  const options = [...e.target.selectedOptions];
                  const values = options.map(option => option.value);
                  setSelectedBrand(values);
                }}
              > 
                {brands.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>     

              <div className='trendingProductsFrame'>
                {BrandFilterCreps.map((filteredCreps) => (

                  <div className='womenTrendingCardsWrapper'> 
                    <img className="card"src={filteredCreps.productImage} alt='img'/>
                    <div className='productName'> {filteredCreps.productName} </div>
                  </div>

                ))}
              </div>

            </div>

            <div className="section"><h1>Section2</h1></div>
            <div className="section"><h1>Section3</h1></div>
            <div className="section"><h1>Section4</h1></div>
          </body>

          <div className="windowFrame"> This is the window/Curtin.
              <div className="windowDoorL"></div>
              <div className="windowDoorR"></div>
          </div>

          <div className="cameraLenseFrame"> Camera Open Lense.
              <div className="coverTL"></div>
              <div className="coverTR"></div>
              <div className="coverBL"></div>
              <div className="coverBR"></div>
          </div>

        </div>
      );
      
  
  };
  


