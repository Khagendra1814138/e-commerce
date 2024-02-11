import React from 'react';
import { useRef } from 'react';
import {useNavigate} from "react-router-dom";

import '../../App.css';
import "../../styles/HomePage.css";

import Men from "../../images/home/mens.jpg";
import Women from "../../images/home/womens.jpg";
import Kids from "../../images/home/kids.jpg";


import { TrendingCreps } from '../TrendingProducts/trendingShoesFilter';
import { NewProducts } from '../NewSection/newProductsArray';

import HomeSwiper from './homeSwiper';
import { ShopByBrand } from './brandSwiper';

function Home() {
  const whoForSection = useRef(null);
  const navigate = useNavigate();

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };


  return (
    <div className="homePage">

      <header className="header">
        <h1>SUMMER TO SHINE</h1>
        <h2>Make it your season of brilliance with looks designed to move.</h2>
        <button onClick={() => scrollToSection(whoForSection)}>Shop</button>
        <HomeSwiper/>
      </header>

      <section className='TrendingSection'>
        <div className='trendingInformationFrame'>
          <h2>TRENDING</h2>
          <br></br>
          <br></br> 
          <p>Shop some of the most viewed and desired products by our customers.</p>
          <button onClick={() => navigate("/TrendingProducts")}>Shop</button>
        </div>

        <div className='trendingProduct'>
          {TrendingCreps.map((trendingCreps) => (
            <image> 
                <div className="card" style={{backgroundImage: `url(${trendingCreps.productImage})`}} alt='img'></div>
                <div className='productName'> {trendingCreps.productName}</div>
                <div className='productPrice'> £{trendingCreps.price}</div>
            </image>
          ))}
        </div>
      </section>

      <section className='TrendingSection'>
        <div className='trendingProduct'>
          {NewProducts.map((newCreps) => (
            <image> 
                <div className="card" style={{backgroundImage: `url(${newCreps.productImage})`}} alt='img'></div>
                <div className='productName'> {newCreps.productName}</div>
                <div className='productPrice'> £{newCreps.price}</div>
            </image>
          ))}
        </div>

        <div className='trendingInformationFrame'>
          <h2>NEW CREPS</h2>
          <br></br>
          <br></br> 
          <p>Refresh your rotation with our latest drop.</p>
          <button onClick={() => navigate("/NewArrivals")}>Shop</button>
        </div>
      </section>

      <h1 ref={whoForSection}>SHOP BY CATEGORY</h1>
      <section className='whoForSection'>
        <image className='whoForChoicesFrame' style={{backgroundImage: `url(${Men})`}}>
          <button className='whoForButton' onClick={() => navigate("/Men")}> Men's </button>
        </image>

        <image className='whoForChoicesFrame' style={{backgroundImage: `url(${Women})`}}>
          <button className='whoForButton' onClick={() => navigate("/Women")}> Women's </button>
        </image>

        <image className='whoForChoicesFrame' style={{backgroundImage: `url(${Kids})`}}>
          <button className='whoForButton' onClick={() => navigate("/Kids")}> Kids' </button>
        </image>
      </section>

      <h1>BRANDS YOU LOVE</h1>
      <section className='whoForSection'>
        <ShopByBrand/>
        <button onClick={() => navigate("/AllBrandsPage")} className='showAllBrandsBtn'>Show All Brands</button>
      </section>

      <h1>HAPPY CUSTOMERS</h1>
      <section className='sectionCustomerReviews'>
        <div className='customersQuoteCard'>
          <div className='customerImageNameFrame'>
            <div className='customerImage'></div>
            <div className='customeName'>Rhian</div>
          </div>

          <div className='reviewStarsFrame'>
            <div className='goldStar'></div>
            <div className='goldStar'></div>
            <div className='goldStar'></div>
            <div className='goldStar'></div>
            <div className='goldStar'></div>
          </div>

          <div className='reviewQuote'>
            “Very helpful and corrected our delivery problem”
          </div>
          <div className='reviewNameDate'>1 day ago</div>
        </div>

        <div className='customersQuoteCard'>
          <div className='customerImageNameFrame'>
            <div className='customerImage'></div>
            <div className='customeName'>Amy</div>
          </div>

          <div className='reviewStarsFrame'>
            <div className='goldStar'></div>
            <div className='goldStar'></div>
            <div className='goldStar'></div>
            <div className='goldStar'></div>
            <div className='greyStar'></div>
          </div>

          <div className='reviewQuote'>
            “Very helpful and corrected our delivery problem”
          </div>
          <div className='reviewNameDate'>6 hours ago</div>
        </div>

        <div className='customersQuoteCard'>
          <div className='customerImageNameFrame'>
            <div className='customerImage'></div>
            <div className='customeName'>Jas</div>
          </div>

          <div className='reviewStarsFrame'>
            <div className='goldStar'></div>
            <div className='goldStar'></div>
            <div className='goldStar'></div>
            <div className='goldStar'></div>
            <div className='goldStar'></div>
          </div>

          <div className='reviewQuote'>
            “Rapid delivery and never get my order wrong. What else could I ask for”
          </div>
          <div className='reviewNameDate'>2 day ago</div>
        </div>
      </section>

      <section className='sectionEmailRegister'>
            <h1>Want To Get 10% Off Your Next Order?</h1>
            <h2>Sign up for the latest news, products and offers</h2>
            <input className='emailBox' placeholder='Enter Email Address'></input>
            <h2>We'll use your information in accordance with our Privacy Notice</h2>
            <h2>*Terms & Conditions Apply</h2>
      </section>
    
    </div>
  );
}

export default Home;