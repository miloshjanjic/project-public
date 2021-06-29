import { Link } from 'react-router-dom';
import React from 'react';

import './style/nav.css';
import logo from './assets/images/logo_color.svg';

const Navbar = () => {
  // const user = null;

  // const isLogin = false;
  // {isLogin ? 'Register' 'Login'}
  // {isLogin && (
  <>    </>
  // )

  return (

    <nav className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="logo_color" className="logo_color" />
      </Link>

      <div className="navbar-links" >
        <ul>
          <li><a>BREAKFAST</a></li>
          <li><a>BRUNCH</a></li>
          <li><a>LUNCH</a></li>
          <li><a>DINNER</a></li>
        </ul>
      </div>

      {/* {user ? () : () } */}
      <Link to={"/login"}>
        <button className="btn-logIn">
          LOG IN
        </button>
      </Link>

      <span>or</span>

      <Link to={"/register"}>
        <button className="btn-createAcc">
          CREATE ACCOUNT
        </button>
      </Link>

      <Link to={"/recipe-list"}>
        <button className="btn-logIn">
          MY RECIPES
        </button>
      </Link>

      <Link to={"/profile"}>
        <button className="btn-logIn">
          MY PROFILE
        </button>
      </Link>

      <Link to={"/"}>
        <button className="btn-logIn">
          LOG OUT
        </button>
      </Link>

    </nav>
  )
};

export default Navbar;