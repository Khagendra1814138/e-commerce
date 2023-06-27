import React, { useContext } from "react";

import "../../styles/ProductCard.css";

import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
    const { id, productName, price, productImage} = props.data;
    const { addToCart, cartItems} = useContext (ShopContext);

    const cartItemAmount = cartItems[id];

    return (
        <card className="productCard">
            <image>{productImage}</image>
            <detail className="detailFrame">

            <div className="productDetail">
                <div className="productName">{productName}</div>
                <div className="productPrice">£{price}</div>
            </div>
            </detail>
            <button className="addToBag" onClick={() => addToCart(id)}>Add to Bag
                {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
        </card>
    );
}
    