// import { set } from 'mongoose';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './style/register.css';

const Register = () => {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [password, setPassword] = useState('');
  const [repeat, setReapet] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { firstName, lastName, email, birthday, password, repeat }

    fetch('', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('Accont added');
    })
  };

  return (
    <div className="Account">
      <h2>Create Account</h2>

      <div className="account-div">
        <div className="account-div1">
          <h2>Create your account</h2>
          <br />
          <p> The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph,     page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.</p>
        </div>

        <div className="account-div2" >
          <form onSubmit={handleSubmit}>
            <label >First Name</label>
            <input
              required
              type="text"
              value={firstName}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <label >Last Name</label>
            <input
              required
              type="text"
              value={lastName}
              onChange={(e) => setLastname(e.target.value)}
            /> <br /> <br />
            <label >Email</label>
            <input
              required
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label >Birthday</label>
            <input
              required
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            /> <br /> <br />
            <label >Password</label>
            <input
              required
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label >Repeat Password</label>
            <input
              required
              type="text"
              value={repeat}
              onChange={(e) => setReapet(e.target.value)}
            /> <br /><br />
            <Link to={"/login"} >
              <input type="submit" value="CREATE ACCOUNT" />
            </Link>
          </form>

        </div>
      </div>
    </div>
  )
};

export default Register;