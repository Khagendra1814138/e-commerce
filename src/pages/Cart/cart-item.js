import React, { useContext } from "react";

import "./cartItem.css";
import { ShopContext } from "../../context/shop-context";

import { MinusCircle } from 'react-feather';
import { PlusCircle } from 'react-feather';

export const CartItem = (props) => {

    const {id, productName, price, productImage} = props.data;

    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);

    return (
        <card className="cartProductCard">
            <image style={{backgroundImage: `url(${productImage})`}}></image>
            
            <detail className="cartProductDetailFrame">
                <div className="cartproductName">{productName}</div>
                <div className="cartproductPrice">£{price}</div>
                
                <div className="cartQuantityFrame">
                    <div>Quantity: </div>

                    <div className="addRemoveFrame">
                        <button className="plus" onClick={()=> removeFromCart(id)}> <MinusCircle size={40}/> </button>
                        <input className="quantityDisplay" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}></input>
                        <button className="minus" onClick={()=> addToCart(id)}> <PlusCircle size={40}/> </button>
                    </div>
                </div>

                <div className="cartSizeFrame">
                    <div>Size: </div>

                    <select className="selectorFrame">
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                </div>
               
            </detail>
        </card>
    );
}