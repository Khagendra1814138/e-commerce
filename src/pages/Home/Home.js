import React from 'react';
import { useRef } from 'react';
import '../../App.css';
import "../../styles/HomePage.css";

import Men from "../../images/home/mens.jpg";
import Women from "../../images/home/womens.jpg";
import Kids from "../../images/home/kids.jpg";


import { PRODUCTS } from '../MenSection/MensProduct';
import {useNavigate} from "react-router-dom";

import HomeSwiper from './homeSwiper';


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
          <h2>Trending</h2>
          <br></br>
          <br></br> 
          <p>Shop some of the most viewed and desired products by our customers.</p>
          <button>Shop</button>
        </div>

        <div className='trendingProduct'>
          {[...PRODUCTS.map((products) => (
            <image> 
              <img className="card"src={products.productImage} alt='img'/>
              <div className='productName'> {products.productName} </div>
            </image>
            )),]}
        </div>
      </section>

      <h1 ref={whoForSection}>Who are you shoipping for?</h1>
      <section className='whoForSection'>
        <image className='whoForChoicesFrame' style={{backgroundImage: `url(${Men})`}}>
          <button className='whoForButton' onClick={() => navigate("/Men")}> Men </button>
        </image>

        <image className='whoForChoicesFrame' style={{backgroundImage: `url(${Women})`}}>
          <button className='whoForButton' onClick={() => navigate("/Women")}> Women </button>
        </image>

        <image className='whoForChoicesFrame' style={{backgroundImage: `url(${Kids})`}}>
          <button className='whoForButton' onClick={() => navigate("/Kids")}> Kids </button>
        </image>
      </section>


      <h1>Shop By The Brands You Love</h1>
      <section className='whoForSection'>
        <div>Adidas</div>
        <div>Nike</div>
        <div>Puma</div>
        <div>Vans</div>
        <div>Converse</div>
      </section>
    
    </div>
  );
}

export default Home;