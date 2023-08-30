import React, { useState }  from "react";

import "./Register.css";
import "./Login.css";

import { BookOpen } from 'react-feather';
import { Mail } from 'react-feather';
import { Lock } from 'react-feather';
import { User } from 'react-feather';

function RegisterPage() {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleSubmit = (event) => {
    alert('Name: ' + userName + ' Password: ' + password + ' Email: ' + userEmail );
    event.preventDefault();
    // handle form submission
  };

    return (
      <div className="registerPage">

        <box className = "formFrame">
          <span className="wave">👋</span>
          <div className="avatarIcon"><BookOpen size={130} color="black"/></div>

          <form onSubmit={handleSubmit}>
            
            <div className="loginForm">
              <label className='registerLabel'><User size={30} color="black"/>ENTER NAME</label>
              <input className='inputBox' placeholder='Ralph Lauren'
                type="name"
                id="name"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              />

              <label className='registerLabel'><Lock size={30} color="black"/>PASSWORD</label>
              <input className='inputBox' placeholder='***A@#/***'
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              
              <label className='registerLabel'><Mail size={30} color="black"/>EMAIL</label>
              <input className='inputBox' placeholder='name@mail.com'
                type="email"
                id="email"
                value={userEmail}
                onChange={(event) => setUserEmail(event.target.value)}
              />
            </div>

            <button type="submit" className='signUp-In-Btn'>Register</button>

          </form>   
        </box>
      </div>
    );
  }
  
  export default RegisterPage;