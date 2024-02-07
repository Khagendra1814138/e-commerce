import React from "react";
import { useNavigate } from "react-router-dom";

import "./AllBrandsPage.css";
import { BrandsArray } from "../Home/brandsArray";

export const AllBrandsPage = () => {

    const navigateBrandPage = useNavigate();

    return (
        <div className="AllBrandPages">
            <header className="brandsHeader">
                <h1>BRINGING THE BIGGEST BRANDS!</h1>
                <h2>Men's, Women's & Kids' footwear brands</h2>
            </header>

            <div className="brandsGrid">
                {BrandsArray.map((brands) => (
                    <button key={brands.id} className="brandButton" onClick={() => navigateBrandPage(brands.link)} style={{backgroundImage: `url(${brands.logo})`}}></button>
                ))}
            </div> 
        </div>
    )
}