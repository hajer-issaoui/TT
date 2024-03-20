// LoginForm.js
import React from 'react';
import { BrowserRouter, Routes,Route, Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import { useNavigate } from 'react-router-dom';
import HomePage from './HomePage';


function LoginForm() {
  const navigate=useNavigate();
  function handleclick(){
    navigate("/HomePage")
  }
  return (
    
    <form className="login-form" method="post">
      <h2>Login</h2>
      <input type="text" placeholder="Username" required />
      <input type="password" placeholder="Password" required />
      <button className="btn" onClick={handleclick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Sign in
      </button>
      <p className="message">
  Not registered? <Link to="/RegisterForm">create an account </Link>
      </p>
    </form>
    
    
  );
}

export default LoginForm;
