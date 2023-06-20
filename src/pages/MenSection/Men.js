import React from "react";

import "../../styles/MensPage.css";


function MensPage() {
    return (
      <div className="MenPage">
        
        <header className="mensHeader">
          <h1>MENS FOOTWARE</h1>
          <image className="focusedProduct">Product Image</image>
        </header>

        <section className="trendingThisWeekSection">
          <h1>Trending This Week</h1>
          <div className='mensTrendingProductsFrame'>
            <div className='mensTrendingCards'>1</div>
            <div className='mensTrendingCards'>2</div>
            <div className='mensTrendingCards'>3</div>
            <div className='mensTrendingCards'>4</div>
            <div className='mensTrendingCards'>5</div>
            <div className='mensTrendingCards'>6</div>
            <div className='mensTrendingCards'>7</div>
            <div className='mensTrendingCards'>8</div>
            </div>
        </section>

        <section className="trendingThisWeekSection">
          <h1>Latest Releases</h1>
          <div className='mensTrendingProductsFrame'>
            <div className='mensTrendingCards'>1</div>
            <div className='mensTrendingCards'>2</div>
            <div className='mensTrendingCards'>3</div>
            <div className='mensTrendingCards'>4</div>
            <div className='mensTrendingCards'>5</div>
            <div className='mensTrendingCards'>6</div>
            <div className='mensTrendingCards'>7</div>
            <div className='mensTrendingCards'>8</div>
          </div>
        </section>

        <section className="productDisplayFrame">
            <div className='mensTrendingCards'>1</div>
            <div className='mensTrendingCards'>2</div>
            <div className='mensTrendingCards'>3</div>
            <div className='mensTrendingCards'>4</div>
            <div className='mensTrendingCards'>5</div>
            <div className='mensTrendingCards'>6</div>
            <div className='mensTrendingCards'>7</div>
            <div className='mensTrendingCards'>8</div>
        </section>


  
      </div>
    );
  }
  
  export default MensPage;