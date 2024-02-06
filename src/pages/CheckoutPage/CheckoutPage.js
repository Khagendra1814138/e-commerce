import React, { useContext } from "react";

import "./CheckoutPage.css";

import { ShopContext } from "../../context/shop-context";

export const CheckoutPage = () => {
    const {getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const shippingCost = 3.99;
    const discountCode = 10.00;

    const finalTotalCost =+ totalAmount + shippingCost - discountCode;

    return(
        <div className="checkoutPage">
            <div className="checkOutFrame">
                <div className="checkoutDetailInputWrapper">
                    <div className="checkoutInputWrapper">
                        <h2>CONTACT</h2>
                       
                        <div className="flexWrapper">
                            <div className="checkoutNameSurnameInput">
                                <label>Name</label>
                                <input type="input" placeholder="Enter your name"></input>
                            </div>
                            <div className="checkoutNameSurnameInput">
                                <label>Surname</label>
                                <input type="input" placeholder="Enter your Surname"></input>
                            </div>
                        </div>
        
                        <label>Email</label>
                        <input type="input" placeholder="Enter your Email"></input>
                    </div>


                    <div className="checkoutInputWrapper">
                        <h2>ADDRESS</h2>
                    
                        <div className="flexWrapper">
                            <div className="checkoutNameSurnameInput">
                                <label>Name</label>
                                <input type="input" placeholder="Enter your name"></input>
                            </div>
                            <div className="checkoutNameSurnameInput">
                                <label>Surname</label>
                                <input type="input" placeholder="Enter your Surname"></input>
                            </div>
                        </div>
        
                        <label>Address</label>
                        <input type="input" placeholder="21 Road Name"></input>

                        <label>City/Town</label>
                        <input type="input" placeholder="London"></input>

                        <label>Postcode</label>
                        <input type="input" placeholder="L124 5LX"></input>
                    </div>


                    <div className="checkoutInputWrapper">
                        <h2>DILIVERY OPTION</h2>
                        <div className="DeliveryflexWrapper">
                            <input type="radio" value="3.99"></input>
                            <labe>Standard</labe>
                            <labe>3-4 Working Days</labe>
                            <labe>£3.99</labe>
                        </div>

                        <div className="DeliveryflexWrapper">
                            <input type="radio" value="5.99"></input>
                            <labe>Standard</labe>
                            <labe>2-3 Working Days</labe>
                            <labe>£5.99</labe>
                        </div>
                    </div>


                    <div className="checkoutInputWrapper">
                        <h2>CARD DETAILS</h2>

                        <label>Card Number*</label>
                        <input type="input" placeholder="XXXX-XXXX-XXXX-XXXX"></input>

                        <label>Name On Number*</label>
                        <input type="input" placeholder="MR JOHN WALKER"></input>

                        <div className="flexWrapper">
                            <div className="checkoutNameSurnameInput">
                                <label>Card expiry date*</label>
                                <input type="input" placeholder="MM/YY"></input>
                            </div>
                            <div className="checkoutNameSurnameInput">
                                <label>Surname</label>
                                <input type="input" placeholder="Enter your Surname"></input>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="summaryFrame">
                    <h1>SUMMARY</h1>
                    <div className="summaryInputWrapper">
                        <label>SHIPPING COST:</label>
                        <label>£{shippingCost}</label>     
                    </div>

                    <div className="summaryInputWrapper">
                        <label>DISCOUNT:</label>
                        <label>£{discountCode}</label>     
                    </div>

                    <div className="summaryInputWrapper">
                        <input type="input" placeholder="VOU-3MB9-RNSK-KPXK-3QBWL"></input>
                        <button className="discountApplyBtn">APPLY</button>   
                    </div>

                    <div className="summaryInputWrapper">
                        <label>Subtotal: </label>
                        <label>£{totalAmount}</label>
                    </div>

                    <div className="summaryInputWrapper">
                        <label>Discount: </label>
                        <label>£{discountCode}</label>
                    </div>

                    <div className="summaryInputWrapper">
                        <label>TOTAL: </label>
                        <label>£{finalTotalCost}</label>
                    </div>
                    
                    <button>Place Order</button>
                </div>
            </div>
        </div>
    );
};