import React, { useState }  from "react";

import "./Register.css";
import "./Login.css";

import { UserPlus } from 'react-feather';
import { Mail } from 'react-feather';
import { Lock } from 'react-feather';
import { User } from 'react-feather';

function RegisterPage() {

  const [userName, setUserName] = useState('');
  const [userSureName, setuserSureName] = useState('');
  const [password, setPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleSubmit = (event) => {
    alert('Name: ' + userName + 'Surename: ' + userSureName + ' Password: ' + password + ' Email: ' + userEmail );
    event.preventDefault();
    // handle form submission
  };

    return (
      <div className="registerPage">

        <box className = "formFrame">
          <span className="wave">👋</span>
          <div className="avatarIcon"><UserPlus size={130} color="black"/></div>

          <form onSubmit={handleSubmit}>
            
            <div className="loginForm">
              <label className='registerLabel'><User size={30} color="black"/>NAME</label>
              <input className='inputBox' placeholder='Ralph'
                type="name"
                id="name"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              />

              <label className='registerLabel'><User size={30} color="black"/>SURENAME</label>
              <input className='inputBox' placeholder='Lauren'
                type="sureName"
                id="sureName"
                value={userSureName}
                onChange={(event) => setuserSureName(event.target.value)}
              />
 
              <label className='registerLabel'><Mail size={30} color="black"/>EMAIL</label>
              <input className='inputBox' placeholder='name@mail.com'
                type="email"
                id="email"
                value={userEmail}
                onChange={(event) => setUserEmail(event.target.value)}
              />

              <label className='registerLabel'><Lock size={30} color="black"/>PASSWORD</label>
                <input className='inputBox' placeholder='***A@#/***'
                  type="password"
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

            <button type="submit" className='signUp-In-Btn'>Register</button>

          </form>   
        </box>
      </div>
    );
  }
  
  export default RegisterPage;