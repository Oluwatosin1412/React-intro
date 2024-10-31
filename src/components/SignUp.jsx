import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./index.css"

function SignUp() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/Login');
  };
  
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Hello,</h2>
        <h1>Sign Up!</h1>
        
        <form>
          <label>
            Username
            <input type="text" placeholder="Enter username" />
          </label>
          
          <label>
            Email Address
            <input type="email" placeholder="Enter email" />
          </label>
          
          <label>
            Password
            <input type="password" placeholder="Enter password" />
          </label>
          
          <div className="policy">
            <input type="checkbox" id="policy" />
            <label htmlFor="policy">I accept the policy and terms.</label>
          </div>
          
          <button onClick={goToLogin} type="submit" className="signup-button">Sign Up</button>
        </form>
        
        <div className="social-icons">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-google"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}

export default SignUp;