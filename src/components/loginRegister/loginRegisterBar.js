import React from "react";

import "../loginRegister/loginRegisterBar.css"
import { Link } from "react-router-dom";

import { UserPlus } from 'react-feather';
import { LogIn } from 'react-feather';

function LoginRegisterBar() {
    return (
      <div className="loginRegisterBar">
        <Link className="iconFrame" exact to="Register"> <UserPlus size={30} color="black"/>Register</Link>
        <Link className="iconFrame" exact to="Login"> <LogIn size={30} color="black"/>Login</Link>
      </div>
    );
  }
  
  export default LoginRegisterBar;