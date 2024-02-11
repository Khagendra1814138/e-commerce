import React, {useState} from "react";

import "./ProductMainPage.css";

import { ArrowUp } from 'react-feather';
import { ArrowDown } from 'react-feather';

import { TrendingCreps } from "../TrendingProducts/trendingShoesFilter";

export const ProductMainPage = () => {
    // const [show, setShow] = useState (false);
    // <div className={show ? "red" : "black"}></div>
    // <button onClick={() => setShow(!show)}> {show ? <div>red</div> : <div>black</div>}</button>
    const [toggleState, setConstToggleState]= useState (1);

    const [showMore, setShowMore] = useState(true);

    const toggleTab = (index) => {
        setConstToggleState(index);
    }
    return (
        <div className="productDetailsMainPage"> 
            <div className="productDetailsFrame">
                <div className="productImageDisplayFrame">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                </div>
                <div className="productInformationDisplayFrame">
                    <h1>Product Name</h1>
                    <h2>Men's Shoes</h2>
                    <h2>£99.99</h2>

                    <div className="colorOptionsFrame">
                        <h3>Avaliable Color</h3>
                        <div className="colorOptions">
                            <div className="colors">Red</div>
                            <div className="colors">Red</div>
                            <div className="colors">Red</div>
                            <div className="colors">Red</div>

                            <div className="colors">Red</div>
                            <div className="colors">Red</div>
                        </div>
                    </div>

                    <div className="sizeOptionsFrame">
                        <h3>Avaliable Size</h3>
                        <div className="sizeOptions">
                            <div className="size">6</div>
                            <div className="size">6.5</div>
                            <div className="size">7</div>
                            <div className="size">7.5</div>
                            <div className="size">8</div>
                            <div className="size">8.5</div>
                            <div className="size">9</div>
                            <div className="size">9.5</div>
                            <div className="size">10</div>
                            <div className="size">10.5</div>
                            <div className="size">11</div>
                            <div className="size">11.5</div>
                            <div className="size">12</div>
                            <div className="size">12.5</div>
                            <div className="size">13</div>
                            <div className="size">13.5</div>
                        </div>
                    </div>

                    <button>Add to bag</button>
                    <button>Favourite</button>
                </div>
            </div>



            <div className="tabsContainer">
                <div className="tabsFrame">
                    <div onClick={() => toggleTab(1)} className={toggleState ===1 ? "tabs tabsActive" : "tabs"}>Detail</div>
                    <div onClick={() => toggleTab(2)} className={toggleState ===2 ? "tabs tabsActive" : "tabs"}>Shipping</div>
                    <div onClick={() => toggleTab(3)} className={toggleState ===3 ? "tabs tabsActive" : "tabs"}>Return</div>
                    <div onClick={() => toggleTab(4)} className={toggleState ===4 ? "tabs tabsActive" : "tabs"}>Review</div>
                </div>

                <div className="tabsContentFrame">
                    <div className={toggleState ===1 ? "tabsContent tabsContentActive" : "tabsContent"}>
                        <div className={showMore ? "tabsInformationBox tabsInformationBoxShow" : "tabsInformationBox"}>
                            Returns policy: allow up to 14 days for your return to be processed once we receive it back in our warehouse. Once refunded it will show in your account within 3-5 days. orders cannot be exchanged Instore and must only be returned. Remember to take proof of purchase such as your receipt or dispatch note and also the item(s) you wish to return. Our Instore team will be happy to assist you.
                        </div>
                    </div>
                </div>

                <div className="tabsContentFrame">
                    <div className={toggleState ===2 ? "tabsContent tabsContentActive" : "tabsContent"}>
                        <div className={showMore ? "tabsInformationBox tabsInformationBoxShow" : "tabsInformationBox"}>
                            Returns policy: allow up to 14 days for your return to be processed once we receive it back in our warehouse. Once refunded it will show in your account within 3-5 days. orders cannot be exchanged Instore and must only be returned. Rem
                        </div>
                    </div>
                </div>

                <div className="tabsContentFrame">
                    <div className={toggleState ===3 ? "tabsContent tabsContentActive" : "tabsContent"}>
                        <div className={showMore ? "tabsInformationBox tabsInformationBoxShow" : "tabsInformationBox"}>
                            <b>Returns policy:</b>
                            <br></br>
                            <br></br>
                            Please allow up to 14 days for your return to be processed once we receive it back in our warehouse. Once refunded it will show in your account within 3-5 days.
                            <br></br>
                            <br></br>
                            Internet orders cannot be exchanged Instore and must only be returned. Remember to take proof of purchase such as your receipt or dispatch note and also the item(s) you wish to return. Our Instore team will be happy to assist you. All payment methods refunded in store!
                            <br></br>
                            <br></br>
                            Personalised items will not be accepted unless the personalisation is incorrect or if the item is faulty. Underwear is non-returnable for hygiene reasons. Swimwear returns will only be accepted if the hygiene seal is still intact.
                            <br></br>
                            <br></br>
                            You can also send your return by post. Just visit our returns portal here https://returns.crepsCheck.co.uk/ and choose your preferred carrier.
                            <br></br>
                            <br></br>
                            Printerless options available!
                        </div>
                    </div>
                </div>

                <div className="tabsContentFrame">
                    <div className={toggleState ===4 ? "tabsContent tabsContentActive" : "tabsContent"}>
                        <div className={showMore ? "tabsInformationBox tabsInformationBoxShow" : "tabsInformationBox"}>
                            Returns policy: allow up to 14 days for your return to be processed once we receive it back in our warehouse. Once refunded it will show in your account withirders cannot be exchanged Instore and must only be returned. 
                        </div>
                    </div>
                </div>

                <button onClick={() => setShowMore(!showMore)}> 
                    {showMore ? <ArrowUp size={50}/> : <ArrowDown size={50}/>}
                </button>
            </div>

            <div className="sectionSimilarProduct">
                <h1>Similar Products</h1>
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