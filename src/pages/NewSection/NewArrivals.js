import React from "react";

import "../../styles/NewArrivals.css";
import "../../App.css"
// import Carousel from "../../components/carousel/Carousel";
// import { countries } from "../../components/carousel/Data";

function NewArrivals() {
    return (
      <div className="NewArrivals">
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


