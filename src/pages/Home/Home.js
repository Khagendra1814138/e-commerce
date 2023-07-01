import React from 'react';
import '../../App.css';
import "../../styles/HomePage.css";
import logo from '../../logo.svg';

import Men from "../../images/home/mens.jpg";
import Women from "../../images/home/womens.jpg";
import Kids from "../../images/home/kids.jpg";


import { PRODUCTS } from '../MenSection/MensProduct';
import {useNavigate} from "react-router-dom";

import header1 from "../../images/home/header1.jpg";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="App">

      <header className="header">
        <img className='headerImage' src={header1} alt="header"/>
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

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is an E-Commerce Front-end. Still in progress...
        </p>
       
       
        <div className="windowFrame"> This is the window/Curtin.
            <div className="windowDoorL"></div>
            <div className="windowDoorR"></div>
        </div>

        <div className="cameraLenseFrame"> Camera Open Lense.
            <div className="coverTL"></div>
            <div className="coverTR"></div>
            <div className="coverBL"></div>
            <div className="coverBR"></div>
        </div>
      </header>
    </div>
  );
}

export default Home;