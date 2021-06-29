import React from 'react';
import './style/footer.css';

import logo from './assets/images/logo_white.svg';

const Footer = () => {

  return (
    <footer>
      <div className="footer" >
      <image src={logo} alt="logo_white" className="logo_white" />

        <div className="footer-second">

          
          <ul>
            <li>BREAKFAST</li>
            <li>BRUNCH</li>
            <li>LUNCH</li>
            <li>DINNER</li>
          </ul>


        </div>

      </div>
    </footer>
  )
};

export default Footer;