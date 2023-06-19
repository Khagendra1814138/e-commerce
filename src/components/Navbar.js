import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function NavBar() {
  return (
      <nav className='navFrame'>

        <logo className="siteLogo"><Link exact to="/" className="links">Logo</Link></logo>
  
        <ul className='Navlists'>
          <Link exact to="NewArrivals" className="links">New Arrivals</Link>
          <Link exact to="Men" className="links">Mens</Link>
          <Link exact to="Women" className="links">Women</Link>
          <Link exact to="Kids" className="links">Kids</Link>
        </ul>

    </nav>
  );
}

export default NavBar;
