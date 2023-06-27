import React, { useContext } from "react";

import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {

    const {id, productName, price, productImage} = props.data;

    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);

    return (
          <card className="productCard">
            <image>{productImage}</image>
            <detail className="detailFrame">

                <div className="productDetail">
                    <div className="productName">{productName}</div>
                    <div className="productPrice">£{price}</div>
                </div>
            </detail>
            
            <button onClick={()=> removeFromCart(id)}> - </button>
            <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}></input>
            <button onClick={()=> addToCart(id)}> + </button>
        </card>
    );
}