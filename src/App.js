import React from 'react';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from "./pages/Home/Home";
import MensPage from './pages/MenSection/Men';
import KidsPage from './pages/KidSection/Kids';
import WomensPage from './pages/WomenSection/Women';
import NewArrivals from './pages/NewSection/NewArrivals';
import {CartPage} from './pages/Cart/Cart';

import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/NewArrivals' element={<NewArrivals/>} />
            <Route path='/Men' element={<MensPage/>} />
            <Route path='/Women' element={<WomensPage/>} />
            <Route path='/Kids' element={<KidsPage/>} />
            <Route path='/Cart' element={<CartPage/>} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
