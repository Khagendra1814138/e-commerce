import React from "react";

import "../styles/Footer.css";

import { Link } from "react-router-dom";
import { Facebook } from 'react-feather';
import { Instagram } from 'react-feather';
import { Twitter } from 'react-feather';
import { Youtube } from 'react-feather';

function Footer() {
    return (
      <div className="footerSection">
          <div className="footerLinksFrame">
            <Link className="footerLinks" exact to="/">Home</Link>
            <Link className="footerLinks" exact to="/Men">Mens</Link>
            <Link className="footerLinks" exact to="/Women">Womens</Link>
            <Link className="footerLinks" exact to="/Kids">Kids</Link>
          </div>

          <div className="socialmediaLinks">
            <box><Facebook size={30} color="teal"/></box>
            <box><Instagram size={30} color="teal"/></box>
            <box><Twitter size={30} color="teal"/></box>
            <box><Youtube size={30} color="teal"/></box>
          </div>

          <div className="bottomInformation">© 2023</div>
      </div>
    );
  }
  
  export default Footer;