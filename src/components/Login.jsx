import React from 'react';
//import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        
        <form>
          <label>
            Email Address
            <input type="email" placeholder="Enter email" />
          </label>
          
          <label>
            Password
            <input type="password" placeholder="Enter password" />
          </label>
          
          <button type="submit" className="login-button">Login</button>
        </form>
        
        {/*
        <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
        */}
      </div>
    </div>
  );
}

export default Login;