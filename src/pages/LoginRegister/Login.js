import React from "react";

import "./Login.css";
import { Mail } from 'react-feather';
import { Lock } from 'react-feather';
import { User } from 'react-feather';

function LoginPage() {
    return (
      <div className="loginPage">   
        <box className = "formFrame">
          <div className="avatarIcon"><User size={130} color="black"/></div>
          <form className = "loginForm">
            <label className='registerLabel'><Mail size={30} color="black"/>EMAIL</label>
            <input type="text" name="email" className='inputBox' placeholder='name@mail.com'/>

            <label className='registerLabel'><Lock size={30} color="black"/>PASSWORD </label>
            <input type="text" name="password" className='inputBox' placeholder='**********' />
          </form>   

          <div className="usefulBtnFrame">
            <button><input type="checkbox" id="checkbox" value="Submit"></input>Remember Detail</button>
            <button>Forgot Password?</button>
          </div>
          <button type="submit" value="LOG IN" className='signUp-In-Btn'>Submit</button>
        </box>

      </div>
    );
  }
  
  export default LoginPage;