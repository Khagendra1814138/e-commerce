import logo from './logo.svg';
import './App.css';
import './styles/NavBar.css';

function App() {
  return (
    <div className="App">
      <nav className='navFrame'>
        <logo className="siteLogo">Logo</logo>

        <ul className='Navlists'>
          <li>New Arrivals</li>
          <li>Mens</li>
          <li>Womens</li>
          <li>Kids</li>
        </ul>

      </nav>

      <header className="header"> Header section  

      </header>

      <section className='TrendingSection'>
        <div className='trendingInfo'>Trending Products This Week!
          <button>Shop</button>
        </div>
        <div className='trendingProductsFrame'>Trending Carousel Style</div>
      </section>

      <h1>Who are you shoipping for?</h1>
      <section className='whoForSection'>
        <div className='whoForChoicesFrame'>Men</div>
        <div className='whoForChoicesFrame'>Women</div>
        <div className='whoForChoicesFrame'>Kid</div>
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

export default App;
