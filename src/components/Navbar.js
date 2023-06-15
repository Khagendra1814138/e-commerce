import "../styles/Navbar.css";

function NavBar() {
  return (
      <nav className='navFrame'>
        <logo className="siteLogo">Logo</logo>

        <ul className='Navlists'>
          <li>New Arrivals</li>
          <li>Mens</li>
          <li>Womens</li>
          <li>Kids</li>
        </ul>

    </nav>
  );
}

export default NavBar;
