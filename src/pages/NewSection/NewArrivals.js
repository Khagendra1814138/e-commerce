import React from "react";

import "../../styles/NewArrivals.css";
import "../../App.css"
// import Carousel from "../../components/carousel/Carousel";
// import { countries } from "../../components/carousel/Data";

function NewArrivals() {
    return (
      <div className="NewArrivals">
        <body className="snappingWrapper">
          <div className="section"><h1>Section1</h1></div>
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
  }
  
  export default NewArrivals;


