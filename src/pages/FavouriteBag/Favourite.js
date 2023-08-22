import React from "react";
import {useNavigate} from "react-router-dom";

import "./Favourite.css";

export const FavouritePage = () => {

    const navigate = useNavigate();

    return (
        <div className="CartPage">
            <div className="cartFrame">

            </div>


            <div className="emptyBagFrame">
            <h1> Your favourite bag is empty :( </h1>
            <button onClick={() => navigate("/")}> Continue Shopping </button>
            </div>
   
        </div>
    );
};