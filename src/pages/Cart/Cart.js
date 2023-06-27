import React, { useContext } from "react";

import "../../styles/CartPage.css";

import { PRODUCTS } from "../MenSection/MensProduct";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";

import {useNavigate} from "react-router-dom";


export const CartPage = () => {
  const { cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="CartPage">
      <div>
        <h1>Your Cart Itemssss</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          } else
          return (null);
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: £{totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button> Pay Total </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};