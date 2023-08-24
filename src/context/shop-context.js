import React, { createContext, useState } from "react";

// import { AllProductsArray } from "../assets/productsArray/productsArrayMerge";
import { TotalProductsArray } from "../assets/AllProductsArray";


export const ShopContext = createContext (null);

//creating the cart array
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < TotalProductsArray.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};


//creating the favourite bag array.
const getDefaultFavourite = () => {
  let favoyruteBag = {};
  for (let i = 1; i < TotalProductsArray.length + 1; i++) {
    favoyruteBag[i] = 0;
  }
  return favoyruteBag;
};


  

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const [setFavouriteItems] = useState(getDefaultFavourite());

  //Gets the total amount cost of the cart.
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in  cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = TotalProductsArray.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return (Math.round(totalAmount * 100) / 100).toFixed(2);
  }

  //Gets the total products amount qyantity inside the cart.
  const getTotalProductsAmount = () => {
    let totalProductsAmount = 0;

    for (const item in  cartItems) {
      if (cartItems[item] > 0) {
        totalProductsAmount += cartItems[item];
      }
    }
    return totalProductsAmount;
  }


  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount}));
  } 


  const addToFavourite = (itemId) => {
    setFavouriteItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };


  const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, getTotalProductsAmount, addToFavourite};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
    