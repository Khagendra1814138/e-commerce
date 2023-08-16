import React from "react";

import "../../components/sideProductsFilter/sideProductsFilter.css";
import "../../styles/NewArrivals.css";
import "../../App.css"

  
  export default function NewArrivals() {
    return(
      <div className="NewArrivals">
        <body className="snappingWrapper">

          <div className="section">
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
  


