import React from 'react';
import { useRef } from 'react';
import {useNavigate, Link} from "react-router-dom";

import '../../App.css';
import "../../styles/HomePage.css";

import Men from "../../images/home/mens.jpg";
import Women from "../../images/home/womens.jpg";
import Kids from "../../images/home/kids.jpg";

import PumaLogo from "../../images/home/pumaLogo.svg";
import NikeLogo from "../../images/home/nikeLogo.svg";
import AdidasLogo from "../../images/home/adidasLogo.svg";

import { TrendingCreps } from "../../components/trendingShoesFilter";

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
          {TrendingCreps.map((trendingCreps) => (

            <image> 
                <img className="card"src={trendingCreps.productImage} alt='img'/>
                <div className='productName'> {trendingCreps.productName} </div>
            </image>

          ))}
        </div>
      </section>

      <h1 ref={whoForSection}>Who are you shopping for?</h1>
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


      <h1>Shop by the brands you love</h1>
      <section className='whoForSection'>
        <Link className='brandPage' exact to="/AdidasProducts" style={{backgroundImage: `url(${AdidasLogo})`}}></Link>
        <Link className='brandPage' exact to="/NikeProducts" style={{backgroundImage: `url(${NikeLogo})`}}></Link>
        <Link className='brandPage' exact to="/PumaProducts" style={{backgroundImage: `url(${PumaLogo})`}}></Link>
      </section>
    
    </div>
  );
}

export default Home;