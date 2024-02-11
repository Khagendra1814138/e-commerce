import React, { useContext } from "react";

import "../../styles/ProductCard.css";
import { Heart } from 'react-feather';


import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
    const { id, productName, price, productImage, status} = props.data;
    const { addToCart, cartItems} = useContext (ShopContext);
    const cartItemAmount = cartItems[id];

    return (
        <card className="productCard">
            <image style={{backgroundImage: `url(${productImage})`}} className="productImage">
                <div className={status === "New" ? "productStatus newColor" : "productStatus saleColor"}>{status}</div>
            </image>
            <detail className="detailFrame">
                <div className="productDetail">
                    <div className="productName">{productName}</div>
                    <div className="productPrice">£{price}
                        <button className="addToFavouriteBTN"><Heart size={30} color="teal"/></button>
                    </div>
                </div>
            </detail>

            <button className="addToBag" onClick={() => addToCart(id)}>Add to Bag&nbsp;
                {cartItemAmount > 0 && <>({"Quantity: " + cartItemAmount})</>}
            </button>

        </card>
    );
}
    