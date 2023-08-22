import React, { useContext } from "react";

import { MinusCircle } from 'react-feather';

import { ShopContext } from "../../context/shop-context";


export const CartItem = (props) => {

    const {id, productName, price, productImage} = props.data;

    const {cartItems, addToCart} = useContext(ShopContext);
    const cartItemAmount = cartItems[id];

    return (
        <card className="productCard">
            <img src={productImage} alt="productImage"/>
            <detail className="detailFrame">

                <div className="productDetail">
                    <div className="productName">{productName}</div>
                    <div className="productPrice">£{price}</div>
                </div>
            </detail>
            
            <button className="addToBag" onClick={() => addToCart(id)}>Add to Bag&nbsp;
                {cartItemAmount > 0 && <>({"Quantity: " + cartItemAmount})</>}
            </button>
            <button className="add-favouriteBtn" onClick={()=> removeFromCart(id)}> <MinusCircle size={30} color="black"/> </button>
        </card>
    );
}