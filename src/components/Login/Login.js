import React, { useState, useEffect } from 'react';
import './Login.css';
import fire from './firebase';
import LoginComponent from './LoginComponents';
import { useHistory } from "react-router-dom";

const SpreadSheet_ID = '1SgS6w7IBsuGeaRhAtiheusWMFstSOYImpAZeoX6ednM';

const Login = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState('');
  const history = useHistory();

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire.auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      clearInputs();
      setUser(user);
      history.push("/ImageInput");
    })
    .catch(err => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
  };

  const handleSignup = () => {
    clearErrors();
    fire.auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      clearInputs();
      setUser(user);
      history.push("/ImageInput");
    })
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    });
  };  
  
  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListner = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser (user);
      } else {
        setUser ("");
      }
    });
  };

   return (
    <div className='App'>
      <LoginComponent 
      email = {email}
      setEmail = {setEmail}
      password = {password}
      setPassword = {setPassword}
      handleLogin = {handleLogin}
      handleSignup = {handleSignup}
      hasAccount = {hasAccount}
      setHasAccount = {setHasAccount}
      emailError = {emailError}
      passwordError = {passwordError}/>
    </div>
  );
};

export default Login;
