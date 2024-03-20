// RegisterForm.js
import React from 'react';
import { BrowserRouter, Routes,Route, Link } from 'react-router-dom';
import LoginForm from './LoginForm';


function RegisterForm({ toggleForm }) {
  return (
    <form className="register-form" method="POST">
      <h2>Register</h2>
      <input type="text" placeholder="Full Name *" required />
      <input type="text" placeholder="Username *" required />
      <input type="email" placeholder="Email *" required />
      <input type="password" placeholder="Password *" required />
      <button className="btn" onClick={toggleForm}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Create
      </button>
      <p className="message">
  Already registered? <Link to="/LoginForm">Sign In </Link>
</p>
    </form>
  );
}

export default RegisterForm;
