import React from 'react';
import { useState } from 'react';

import './style/profile.css';


const Profile = () => {
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
      console.log('Profile added');
    })
  };

  return (
    <div className="profile">
      <h1>My Profile</h1>
      <div className="profile-main" >
        <div className="avatar-div" >
          <input 
            type="image"

            
          />
          <br/> <br/>
          <input 
            type="button"
            value="CHANGE AVATAR"
          />
        </div>

        <div className="profile=div" >
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
            /> <br /> <br />
            <input type="submit" value="SAVE" />
          </form>
        </div>
      </div>
    </div>
  )
};

export default Profile;