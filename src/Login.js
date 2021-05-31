import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './style/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { email, password }

    fetch('', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('Loged In');
    })
  };
  return (
    <div className="login" >
      <h2>Log In</h2>

      <div className="login-div">
        <div className="login-div1">
          <h2>Welcome to Baby's</h2>
          <p className="">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.

          The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.</p>
        </div>

        <div className="login-div2">
          <form onSubmit={handleSubmit}>
            <label>Email</label> <br />
            <input
              required
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /> <br /> <br />
            <label>Password</label> <br />
            <input
              required
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /> <br /><br />
            <Link to={"/profile"} >
              <input type="submit" value="LOG IN" />
            </Link>
            <br /><br />
          </form>

        </div>

      </div>

    </div>
  )
};

export default Login;