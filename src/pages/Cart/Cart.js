import React, { useContext } from "react";

import "../../styles/CartPage.css";

// import { AllProductsArray } from "../../assets/productsArray/productsArrayMerge";
import { TotalProductsArray } from "../../assets/AllProductsArray";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { TrendingCreps } from "../../components/trendingShoesFilter";

import {useNavigate} from "react-router-dom";

export const CartPage = () => {
  const { cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="CartPage">
      <div className="basketFrame">
        <div className="cartFrame">
          <div className="cart">
            {TotalProductsArray.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem data={product} />;
              } else
              return (null);
            })}
          </div>
        </div>

        {totalAmount > 0 ? (
          <div className="checkoutFrame">
            <h1>Basket Total</h1>
            <div>
              <p>SUBTOTAL: </p>
              <p>£{totalAmount}</p>
            </div>
            <button onClick={() => navigate("/CheckoutPage")}> Checkout </button>
            <button onClick={() => navigate("/")}> Continue Shopping </button>
          </div>
        ) : (
          <div className="emptyBagFrame">
            <h1> Your bag is empty :( </h1>
            <button onClick={() => navigate("/")}> Continue Shopping </button>
          </div>
        
        )}
      </div>

        
      <div className="suggestionProductsFrame">
        <h1>You Might Aso Like</h1>
        <div className='trendingProductsFrame'>
          {TrendingCreps.map((trendingCreps) => (

            <div className='menTrendingCardsWrapper'> 
              <img className="card"src={trendingCreps.productImage} alt='img'/>
              <div className='productName'> {trendingCreps.productName} </div>
              <div className='productName'> £{trendingCreps.price} </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};