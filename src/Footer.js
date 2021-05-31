import React from 'react';
import './style/footer.css';

const Footer = () => {

  return (
    <footer>
      <div className="footer" >
        <h2>Footer</h2>
        <div className="footer-second">

          <image src="../public/photos/logo_white.svg" alt="logo_white" className="logo_white" />
          <ul>
            <li>BREAKFAST</li>
            <li>BRUNCH</li>
            <li>LUNCH</li>
            <li>DINNER</li>
          </ul>

          <image src="../public/photos/.svg" alt="" className="" />

        </div>

      </div>
    </footer>
  )
};

export default Footer;