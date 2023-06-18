import React from 'react';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from "./pages/Home/Home";
import MensPage from './pages/MenSection/Men';
import KidsPage from './pages/KidSection/Kids';
import WomensPage from './pages/WomenSection/Women';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Men' element={<MensPage/>} />
          <Route path='/Women' element={<WomensPage/>} />
          <Route path='/Kids' element={<KidsPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
