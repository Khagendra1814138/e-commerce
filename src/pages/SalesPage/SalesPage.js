import React from "react";

import "./SalesPage.css";

import salesHeaderImage from "../../images/brandHeader/salesHeaderImage.jpg";

import { SalesProducts } from "./salesProductFilter";

export const SaleProductsPage = () => {
    return (
        <div className="salesPage">
            <header className="salesProductsHeader">
                <h1>SALE PRODUCTS</h1>
                <h2>Up to 50% off sale.</h2>
            </header>

            <image className='brandHeader' style={{backgroundImage: `url(${salesHeaderImage})`}}></image>

            <SalesProducts/>
        </div>
    );
};