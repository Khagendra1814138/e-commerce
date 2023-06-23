import React from "react";

import "../../styles/ProductCard.css";

export const Product = (props) => {
    const { productName, price, productImage} = props.data;

    return (
        <card className="productCard">
            <image src={productImage}></image>
            <detail className="detailFrame">

            <div className="productDetail">
                <div className="productName">{productName}</div>
                <div className="productPrice">£{price}</div>
            </div>
            </detail>
            <button className="addToBag">Add to Bag</button>
        </card>
    );
}
    