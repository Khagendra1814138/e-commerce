import React, { useContext } from "react";

import { ShopContext } from "../../context/shop-context";

import { MinusCircle } from 'react-feather';
import { PlusCircle } from 'react-feather';

export const CartItem = (props) => {

    const {id, productName, price, productImage} = props.data;

    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);

    return (
        <card className="productCard">
            <img src={productImage} alt="productImage"/>
            <detail className="detailFrame">

                <div className="productDetail">
                    <div className="productName">{productName}</div>
                    <div className="productPrice">£{price}</div>
                </div>
            </detail>
            
            <div className="add-removeFrame">
                <button className="add-removeBtn" onClick={()=> removeFromCart(id)}> <MinusCircle size={30} color="black"/> </button>
                <input className="quantityDisplay" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}></input>
                <button className="add-removeBtn" onClick={()=> addToCart(id)}> <PlusCircle size={30} color="black"/> </button>
            </div>
        </card>
    );
}