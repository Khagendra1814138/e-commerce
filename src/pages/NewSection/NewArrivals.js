import React from 'react';

import "../../components/sideProductsFilter/sideProductsFilter.css";
import "../../styles/NewArrivals.css";
import "../../App.css";

import TrendingHeaderImg from "../../images/brandHeader/newArrivals.webp";

import { NewArrivalProducts } from './newProductsSideFilter';

export default function NewArrivals() {
  return(
    <div className="NewArrivals">
       <header className="newProductsHeader">
        <h1>LATEST ARRIVAL</h1>
        <h2>Refresh your looks with the latest drops.</h2>
      </header>

      <image className='brandHeader' style={{backgroundImage: `url(${TrendingHeaderImg})`}}>
      </image>

      <NewArrivalProducts/>

      {/* <body className="snappingWrapper">

        <div className="section">

          <grid className="grid">
              <div></div>
              <div className="gridItems"></div>
              <div></div>
              <div></div>
              <div></div>
          </grid>

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
      </div> */}

    </div>
  );
};

