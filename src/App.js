import React from 'react';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import LoginRegisterBar from './components/loginRegister/loginRegisterBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TopButton from './components/backToTop/BackToTop';

import LoginPage from './pages/LoginRegister/Login';
import RegisterPage from './pages/LoginRegister/Register';
import Home from "./pages/Home/Home";
import MensPage from './pages/MenSection/Men';
import KidsPage from './pages/KidSection/Kids';
import WomensPage from './pages/WomenSection/Women';
import NewArrivals from './pages/NewSection/NewArrivals';
import { FaqPage } from './pages/FAQ/Faq';

import TrendingProductsPage from './pages/TrendingProducts/TrendingProducts';

import AdidasProducts from './pages/ProductsByBrands/AdidasProducts';
import NikeProducts from './pages/ProductsByBrands/NikeProducts';
import PumaProducts from './pages/ProductsByBrands/PumaProducts';

import { CartPage } from './pages/Cart/Cart';
import { CheckoutPage } from './pages/CheckoutPage/CheckoutPage';
import { FavouritePage } from './pages/FavouriteBag/Favourite';
import { ShopContextProvider } from './context/shop-context';

function App() {

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <LoginRegisterBar/>
          <Navbar/>
          <TopButton/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/NewArrivals' element={<NewArrivals/>} />
            <Route path='/Men' element={<MensPage/>} />
            <Route path='/Women' element={<WomensPage/>} />
            <Route path='/Kids' element={<KidsPage/>} />
            <Route path='/Cart' element={<CartPage/>} />
            <Route path='/CheckoutPage' element={<CheckoutPage/>} />
            <Route path='/Favourite' element={<FavouritePage/>} />
            <Route path='/Login' element={<LoginPage/>} />
            <Route path='/Register' element={<RegisterPage/>} />
            <Route path='/FaqPage' element={<FaqPage/>} />
            <Route path='/TrendingProducts' element={<TrendingProductsPage/>} />

            <Route path='/AdidasProducts' element={<AdidasProducts/>} />
            <Route path='/NikeProducts' element={<NikeProducts/>} />
            <Route path='/PumaProducts' element={<PumaProducts/>} />
          </Routes>
          <Footer/>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
