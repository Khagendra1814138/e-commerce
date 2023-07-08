import React from 'react';
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

  const navigate = useNavigate();

  return (
    <div className="homePage">

      <header className="header">
        <h1>SUMMER TO SHINE</h1>
        <h2>Make it your season of brilliance with looks designed to move.</h2>
        <button>Shop</button>
        <image className='headerImage' style={{backgroundImage: `url(${header3})`}}></image>
      </header>

      <section className='TrendingSection'>
        <div className='trendingInfo'>Trending Products This Week!
          <button>Shop</button>
        </div>
        <div className='trendingProductsFrame'>

        {[...PRODUCTS.map((s) => (
            <img className="card" src={s.productImage} alt='img'/>
          )),]}
   
        </div>
      </section>

      <h1>Who are you shoipping for?</h1>
      <section className='whoForSection'>
        <image className='whoForChoicesFrame' style={{backgroundImage: `url(${Men})`}}>
          <button onClick={() => navigate("/Men")}> Men </button>
        </image>

        <image className='whoForChoicesFrame' style={{backgroundImage: `url(${Women})`}}>
          <button onClick={() => navigate("/Women")}> Women </button>
        </image>

        <image className='whoForChoicesFrame' style={{backgroundImage: `url(${Kids})`}}>
          <button onClick={() => navigate("/Kids")}> Kids </button>
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