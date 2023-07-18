import React from "react";

import "../styles/Footer.css";

import { Facebook } from 'react-feather';
import { Instagram } from 'react-feather';
import { Twitter } from 'react-feather';
import { Youtube } from 'react-feather';

function Footer() {
    return (
      <div className="footerSection">
          <div className="footerLinks">Links of the pages and other useful links and helps goes here</div>

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