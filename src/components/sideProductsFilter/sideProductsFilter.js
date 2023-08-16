import React,  { useState } from "react";

import "./sideProductsFilter.css";

import { Menu } from 'react-feather';
import { Minimize2 } from 'react-feather';

import { PRODUCTS } from "../../pages/MenSection/MensProduct";
import { Product } from "../../pages/MenSection/products";
import { brandsList } from "./brandsList";
import { colorsList } from "./colorsList";

// export const BrandFilterCreps = PRODUCTS.filter(filteredCreps => {
//     return filteredCreps.brand.includes(selectedBrand) && filteredCreps.color.includes(selectedColor);
//   }
// );

export const  SideProductsFilter = () =>{

    const [show, setShow] = useState(true);

    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedColor, setSelectedColor] = useState("");

    const FilterCreps = PRODUCTS.filter(filteredCreps => {
            return filteredCreps.brand.includes(selectedBrand) && filteredCreps.color.includes(selectedColor);
        }
    );
   
    return (
        <section className="productDisplayFrame">
            <div className="sideFilterWrapper">
                <div className="sideFilterIcon">Shoes Filter 
                <button className="showHideButton" onClick={() => setShow(!show)}>{show === true ? <Minimize2 size={30} color="black"/> : <Menu size={30} color="black"/>}</button>
                </div>
                {show &&
                <div className="sideFilterFrame">
                    <box className="filterOptions"> Brand 
                        <select className="selectorFrame"
                            multiple={true}
                            value={selectedBrand}
                            onChange={e => {
                            const options = [...e.target.selectedOptions];
                            const values = options.map(option => option.value);
                            setSelectedBrand(values);
                            }}
                        > 
                            {brandsList.map((option) => (
                            <option className="selectorOptions" value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </box>

                    <box className="filterOptions"> Colors 
                        <select className="selectorFrame"
                            multiple={true}
                            value={selectedColor}
                            onChange={e => {
                            const options = [...e.target.selectedOptions];
                            const values = options.map(option => option.value);
                            setSelectedColor(values);
                            }}
                        > 
                            {colorsList.map((option) => (
                            <option className="selectorOptions" value={option.value}>{option.label}</option>
                            ))}
                        </select> 
                    </box>
                    
                    <box className="filterOptions"> Sport </box>
                    <box className="filterOptions"> Sales & Deal </box>
                    <box className="filterOptions"> Size </box>
                </div> 
                }
            </div>

            <div className="ProductDisplay"> {FilterCreps.map((product) => (
                    <Product data={product}/>
                ))} 
            </div>
        </section>
    );
};


