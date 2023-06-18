import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
      <nav className='navFrame'>
        <logo className="siteLogo">Logo</logo>

        <ul className='Navlists'>
          <Link exact to="/" className="links">Home</Link>
          <Link exact to="Men" className="links">Mens</Link>
          <Link exact to="Women" className="links">Women</Link>
          <Link exact to="Kids" className="links">Kids</Link>
        </ul>

    </nav>
  );
}

export default NavBar;
