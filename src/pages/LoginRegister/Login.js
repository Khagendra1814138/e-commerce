import React, { useState }  from "react";

import "./Login.css";
import { Mail } from 'react-feather';
import { Lock } from 'react-feather';
import { User } from 'react-feather';

function LoginPage() {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    alert('Email entered: ' + userEmail + ' Password entered: ' + password);
    event.preventDefault();
    // handle form submission
  };
  
    return (
      <div className="loginPage">   

        <box className = "formFrame">
          <span className="welcome">🙏</span>
          <div className="avatarIcon"><User size={130} color="black"/></div>

          <form onSubmit={handleSubmit}>
            <div className="loginForm">
              <label className='registerLabel'><Mail size={30} color="black"/>EMAIL</label>
              <input className='inputBox' placeholder='name@mail.com' required
                type="email"
                id="email"
                value={userEmail}
                onChange={(event) => setUserEmail(event.target.value)}
              />

              <label className='registerLabel'><Lock size={30} color="black"/>PASSWORD </label>
              <input className='inputBox' placeholder='**********' required
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            
            <div className="usefulBtnFrame">
              <button><input type="checkbox" id="checkbox"></input>Save Details</button>
              <button>Forgot Password?</button>
            </div>

            <button type="submit" className='signUp-In-Btn'>Submit</button>

          </form>
        </box>
      </div>
    );
  }
  
  export default LoginPage;