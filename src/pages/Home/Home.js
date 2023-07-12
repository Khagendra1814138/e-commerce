import React from 'react';
import { useRef } from 'react';
import '../../App.css';
import "../../styles/HomePage.css";

import Men from "../../images/home/mens.jpg";
import Women from "../../images/home/womens.jpg";
import Kids from "../../images/home/kids.jpg";


import { PRODUCTS } from '../MenSection/MensProduct';
import {useNavigate} from "react-router-dom";

// import header1 from "../../images/home/header1.jpg";
import header3 from "../../images/home/header3.webp";

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
        <image className='headerImage' style={{backgroundImage: `url(${header3})`}}></image>
      </header>

      <section className='TrendingSection'>
        <div className='trendingInfo'>Trending Products This Week!
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


      <h1>Shop By Sport</h1>
      <section className='whoForSection'>
        <div>Football</div>
        <div>Basketball</div>
        <div>Tennis</div>
        <div>Running</div>
        <div>Skateboard</div>
        <div>Training</div>
        <div>Yoga</div>
        <div>Dance</div>
      </section>
    
    </div>
  );
}

export default Home;