import React, { useState } from 'react';
import './Login.css';
import Image1 from './components/Image1.jpg';
import Image2 from './components/Image2.jpg';

const Login = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login or sign up logic here
    onClose();
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const leftColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    transition: 'all 0.5s ease'
  };

  const rightColumnStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    transition: 'all 0.5s ease'
  };

  if (!isLogin) {
    leftColumnStyle.transform = 'translateX(100%)';
    rightColumnStyle.transform = 'translateX(-100%)';
  }

  return (
    <div className="overlay">
      <div className="switches">
        <div className={`switch ${isLogin ? 'active' : ''}`} onClick={handleToggle}>Log in</div>
        <div className={`switch ${!isLogin ? 'active' : ''}`} onClick={handleToggle}>Sign up</div>
      </div>
      <div className="login-box">
        <div className="left-column" style={leftColumnStyle}>
          <h2>{isLogin ? 'Log in' : 'Sign up'}</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input type="email" placeholder='Email ID' value={email} onChange={handleEmailChange} />
            </label>
            <label>
              Password:
              <input type="password" placeholder='Password' value={password} onChange={handlePasswordChange} />
            </label>
            <button type="submit">{isLogin ? 'Log in' : 'Sign up'}</button>
          </form>
        </div>
        <div className="right-column" style={rightColumnStyle}>
          {isLogin ? (
            <p><h3>Log in to your account</h3></p>
          ) : (
            <p><h3>Create a new account</h3></p>
          )}
        </div>
      </div>
    </div>
  );
};


export default Login;
