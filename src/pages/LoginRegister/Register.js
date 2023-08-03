import React from "react";

import "./Register.css";
import "./Login.css";

import { BookOpen } from 'react-feather';
import { Mail } from 'react-feather';
import { Lock } from 'react-feather';
import { User } from 'react-feather';

function RegisterPage() {
    return (
      <div className="registerPage">

        <box className = "formFrame">
          <div className="avatarIcon"><BookOpen size={130} color="black"/></div>
            <form className="loginForm">
              <label className='registerLabel'><User size={30} color="black"/>ENTER NAME</label>
              <input type="text" name="name" className='inputBox' placeholder='Ralph Lauren'/>

              <label className='registerLabel'><Lock size={30} color="black"/>PASSWORD</label>
              <input type="text" name="password" className='inputBox' placeholder='***A@#/***'/>
              
              <label className='registerLabel'><Mail size={30} color="black"/>EMAIL</label>
              <input type="text" name="email" className='inputBox' placeholder='name@mail.com'/>
            </form>   
        
            <button type="submit" value="SIGN UP" className='signUp-In-Btn'>Register</button>
        </box>
      </div>
    );
  }
  
  export default RegisterPage;