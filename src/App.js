import React, { useState } from 'react';
import { BrowserRouter, Routes,Route , Link } from 'react-router-dom';
import './App.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import HomePage from './HomePage';
import Infrastructure from './Infrastructure';

function App() {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  const toggleForm = (event) => {
    event.preventDefault();
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  return (
    
 <BrowserRouter>
  <Routes>
    <Route path="/LoginForm" element={<LoginForm />} />
    <Route path="/RegisterForm" element={<RegisterForm />} />
    <Route path="/HomePage" element={<HomePage />} />
    <Route path="/Infrastructure" element={<Infrastructure />} />


  </Routes>
 
</BrowserRouter>
  );
}

export default App;
