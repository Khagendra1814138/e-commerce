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
          <label></label>
          <div className="middleSection">
            <div className="footerLinksFrame">
              <Link className="footerLinks" exact to="/">Home</Link>
              <Link className="footerLinks" exact to="/Men">Mens</Link>
              <Link className="footerLinks" exact to="/Women">Womens</Link>
              <Link className="footerLinks" exact to="/Kids">Kids</Link>
            </div>

            <div className="footerLinksFrame">
              <box><Facebook size={30} /></box>
              <box><Instagram size={30} /></box>
              <box><Twitter size={30} /></box>
              <box><Youtube size={30} /></box>
            </div>

            <div className="footerLinksFrame">
              <Link className="footerSettingLink" >Terms & Conditions</Link>
              <Link className="footerSettingLink" >Privacy & Cookie Policy</Link>
              <Link className="footerSettingLink" >Cookie Settings</Link>
            </div>
          </div>

          

          <div className="bottomSection">
            <label> Copyright © 2023 Creps Check, All rights reserved.</label>
          </div>
      </div>
    );
  }
  
  export default Footer;