import React from 'react';

function ForgotPassword() {
  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h1>Forgot Password</h1>
        <p>Enter your email to reset your password</p>
        
        <form>
          <label>
            Email Address
            <input type="email" placeholder="Enter email" />
          </label>
          
          <button type="submit" className="reset-button">Reset Password</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;