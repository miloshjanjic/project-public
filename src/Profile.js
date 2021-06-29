import React,{useState,useEffect} from 'react';

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

  };
  
  return (
    <div className="profile">
      <h1>My Profile</h1>
      <div className="profile-main" >
        <div className="avatar-div" >
          <input 
            name="Image"
            type="file"
            // onChange={}
          />
          <br/>
          <input 
            type="button"
            value="CHANGE AVATAR"
            /><br /><br />
        </div>

        <div className="profile=div" >
          <form onSubmit={handleSubmit}>
            <label >First Name</label>
            <input
              required
              type="text"
              value={firstName}
              onChange={(e) => setFirstname(e.target.value)}
              /><br />
            <label >Last Name</label>
            <input
              required
              type="text"
              value={lastName}
              onChange={(e) => setLastname(e.target.value)}
              /> <br />
            <label >Email</label>
            <input
              required
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              /><br />
            <label >Birthday</label>
            <input
              required
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              /> <br /> 
            <label >Password</label>
            <input
              required
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              /><br />
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

// const url = `http://localhost:9000/api/profile/`;
// const blog = { firstName, lastName, email, birthday, password }

// fetch(url, {
//   method: 'POST',
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(blog)
// }).then(() => {
//   console.log('Profile added');
// })