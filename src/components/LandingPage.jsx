import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LandingPage.module.css';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGoogle } from 'react-icons/fa';

function LandingPage() {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate('/SignUp');
  };

  const goToLogin = () => {
    navigate('/Login');
  };
  const goToForgotPassword = () => {
    navigate('/ForgotPassword')
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logoSection}>
          <h1>BULK BUY</h1>
        </div>
        <h2>Welcome!</h2>
        <button onClick={goToSignUp} className={styles.createAccountBtn}>Create Account</button>
        <button onClick={goToLogin} className={styles.loginBtn}>Login</button>
        <button onClick={goToForgotPassword} className={styles.forgot}>Forgotten Password</button>
        <p>Sign in with other accounts</p>
        <div className={styles.socialIcons}>
          <FaFacebookF />
          <FaLinkedinIn />
          <FaTwitter />
          <FaGoogle />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;