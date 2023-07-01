import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
import { menuData } from "./navMenu";

import { ShoppingBag } from 'react-feather';


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
        <logo className="siteLogo"><Link exact to="/">Logo</Link></logo>
        
        {(toggleMenu || screenWidth > 500) && (
          <div className="navlists">
            
            {menuData.map((item, index) => (
              <Link className="links" to={item.link} key={index}>{item.title}</Link>
            ))}

          </div>
        )}
        
        <logo className="cartLink"><Link exact to="/Cart"><ShoppingBag size={30} color="black"/></Link></logo>

        <button onClick={toggleNav} className="menuBar"></button>
    </nav>
  );
}

export default NavBar;

