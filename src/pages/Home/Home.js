import React from 'react';
import '../../App.css';
import "../../styles/HomePage.css";
import logo from '../../logo.svg';

import {useNavigate} from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">

      <header className="header"> Header section  

      </header>

      <section className='TrendingSection'>
        <div className='trendingInfo'>Trending Products This Week!
          <button>Shop</button>
        </div>
        <div className='trendingProductsFrame'>
          <div className='card'>1</div>
          <div className='card'>2</div>
          <div className='card'>3</div>
          <div className='card'>4</div>
          <div className='card'>5</div>
          <div className='card'>6</div>
          <div className='card'>7</div>
          <div className='card'>8</div>
        </div>
      </section>

      <h1>Who are you shoipping for?</h1>
      <section className='whoForSection'>
        <div className='whoForChoicesFrame'>
          <button onClick={() => navigate("/Men")}> Men </button>
        </div>

        <div className='whoForChoicesFrame'>
          <button onClick={() => navigate("/Women")}> Women </button>
        </div>

        <div className='whoForChoicesFrame'>
          <button onClick={() => navigate("/Kids")}> Kids </button>
        </div>
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