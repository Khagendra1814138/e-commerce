import React from "react";

import "../../styles/KidsPage.css";
import "../../styles/SideFilter.css";
import "../../styles/ProductCard.css";

function KidsPage() {
    return (
      <div className="KidsPage">

        <h1>KIDS FOOTWARE</h1>

        <section className="productDisplayFrame">
          <div className="sideFilterFrame"> Side Filter
            <box className="filterOptions"> Gender </box>
            <box className="filterOptions"> Colors </box>
            <box className="filterOptions"> Size </box>
            <box className="filterOptions"> Sport </box>
            <box className="filterOptions"> Sales & Deal </box>
          </div>
          <div className="ProductDisplay"> 
            
            <card className="productCard">
              <image></image>
              <detail className="detailFrame">

                <div className="productDetail">
                  <div className="productName">Air Force 1</div>
                  <div className="productPrice">£90.00</div>
                </div>
              </detail>
              <button className="addToBag">Add to Bag</button>
            </card>

            <card className="productCard">2</card>
            <card className="productCard">3</card>
            <card className="productCard">4</card>
            <card className="productCard">5</card>
            <card className="productCard">6</card>
            <card className="productCard">7</card>
            <card className="productCard">8</card>
            <card className="productCard">9</card>
            <card className="productCard">10</card>
            <card className="productCard">11</card>
            <card className="productCard">12</card>
          </div>
        </section>
  
      </div>
    );
  }
  
  export default KidsPage;