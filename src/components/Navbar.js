import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
import { menuData } from "./navMenu";

import { ShoppingBag } from 'react-feather';
import { Heart } from 'react-feather';
import { Menu } from 'react-feather';

import Creps from "../images/nav/creps.png";


function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  }

  const [screenWidth, setScreenWidth] = useState (window.innerWidth);

  useEffect (() => {
    const changeWidth = () =>{
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", changeWidth);

    return () =>{
      window.removeEventListener("resize", changeWidth);
    }

  }, []);

  return (
      <nav className='navFrame'>
        <Link exact to="/"><button className="siteLogo" style={{backgroundImage: `url(${Creps})`}}></button></Link>
        
        {(toggleMenu || screenWidth > 500) && (
          <div className="navlists">
            
            {menuData.map((item, index) => (
              <Link className="links" to={item.link} key={index}>{item.title}</Link>
            ))}

          </div>
        )}
        
        <button className="cartLink">
          <Link exact to="/Cart">
            <ShoppingBag size={30} color="black"/>
          </Link>
        </button>

        <button className="favouriteLink">
          <Link exact to="/Favourite">
            <Heart size={30} color="black"/>
          </Link>
        </button>

        <button onClick={toggleNav} className="menuBar"><Menu size={30} color="black"/></button>
    </nav>
  );
}

export default NavBar;

