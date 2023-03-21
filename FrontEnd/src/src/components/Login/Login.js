import React, { useState } from 'react';
import './Login.css';
import Image1 from './components/Image1.jpg';
import Image2 from './components/Image2.jpg';
// import { google } from 'googleapis';
// import { GoogleSpreadSheet } from 'https://v1.nocodeapi.com/kaladaran/google_sheets/xmUNtrwDAeoHifUc';

const SpreadSheet_ID = '1SgS6w7IBsuGeaRhAtiheusWMFstSOYImpAZeoX6ednM';

async function checkLogin(email, password){
  // const doc = new GoogleSpreadSheet(SpreadSheet_ID);

  // await doc.loadInfo();

  // const sheet = doc.sheetByIndex[0];
  // const rows = await sheet.getRows();

  // for (const row of rows){
    // if (row.emailNew === email && row.passwordNew === password){
      // return true;
    // }
  // }
  // return false;

}

// const auth = new google.auth.GoogleAuth({
//   keyFile: './sdgplogin-5fb5ee67f1b5.json',
//   scopes: ['https://www.googleapis.com/auth/spreadsheets'],
// });

// const sheets = google.sheets({version: 'v4', auth});
// const spreadsheetId = '1SgS6w7IBsuGeaRhAtiheusWMFstSOYImpAZeoX6ednM';
// const range = 'Sheet2!C:D'

// const response = await sheets.spreadsheets.values.get({
//   spreadsheetId,
//   range,
// });

// const rows = response.data.values;
// console.log(rows);

const Login = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Firstname, setFirstName] = useState('');
  const [Lastname, setLastName] = useState('');
  const [emailNew, setEmailNew] = useState('');
  const [passwordNew, setPasswordNew] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailNewChange = (event) => {
    setEmailNew(event.target.value);
  };

  const handlePasswordNewChange = (event) => {
    setPasswordNew(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLogin) {
      if(email.length === 0){
        alert("Please Enter The Email!");
      }
       else if(password.length === 0){
        alert("Please Enter The Password!");
      }
       else{
        try {
          const response = await fetch ('https://v1.nocodeapi.com/kaladaran/google_sheets/xmUNtrwDAeoHifUc?tabId=Sheet1', 
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify([[email, password]])
          });
          await response.json()
          setEmail({UserEmail: ""})
          setPassword({Password: ""})
        } catch (err) {
          console.log(err)
        }
       }

       const isAuthenticated = await checkLogin(email, password);

       if(isAuthenticated) {
        alert('Login Successful');
       }else{
        alert('Invalid Email / Password');
       }

    } else {
      if(Firstname.length === 0){
        alert("Please Enter The First Name!");
      }
      if(Lastname.length === 0){
        alert("Please Enter The Last Name!");
      }
      if(emailNew.length === 0){
        alert("Please Enter The Email!");
      }
      if(passwordNew.length === 0){
        alert("Please Choose The Password!");
      }

      try {
        const response = await fetch ('https://v1.nocodeapi.com/kaladaran/google_sheets/xmUNtrwDAeoHifUc?tabId=Sheet2', 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify([[Firstname, Lastname, emailNew, passwordNew]])
        });
        await response.json()
        setFirstName({FirstName: ""})
        setLastName({Lastname: ""})
        setEmailNew({UserEmail: ""})
        setPasswordNew({Password: ""})
      } catch (err) {
        console.log(err)
      }

      const userData = { Firstname, Lastname, email, password };
      console.log(userData);
    }
    onClose();
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = async () => {     //afsfasfsf
    try {
      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      if (data === 'TRUE') {
        window.open('https://t1js5pdwdqczrcuosbwpjq-on.drv.tw/PPDBTEST/');
        window.close();
      } else {
        // setErrorMessage('Data tidak valid!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  //asdfghjk

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
    <><div>
       <div className="overlay">
         <div className="login-box">
           <div className="left-column" style={leftColumnStyle}>
             <h2>{isLogin ? 'Enter Details' : 'Enter Details'}</h2>
             <form onSubmit={handleSubmit}>
               {!isLogin && (
                 <label>
                   First Name:
                   <input type="text" placeholder='Your First Name' value={Firstname} onChange={handleFirstNameChange} />
                 </label>
               )}
               {!isLogin && (
                 <label>
                   Last Name:
                   <input type="text" placeholder='Your Last Name' value={Lastname} onChange={handleLastNameChange} />
                 </label>
               )}
               {!isLogin && (
                 <label>
                   Email ID:
                   <input type="email" placeholder='Your Email' value={emailNew} onChange={handleEmailNewChange} />
                 </label>
               )}
               {!isLogin && (
                 <label>
                   Choose Password:
                   <input type="password" placeholder='Choose Password' value={passwordNew} onChange={handlePasswordNewChange} />
                 </label>
               )}


               {isLogin && (
                 <label>
                   Email:
                   <input type="email" placeholder='Email ID' value={email} onChange={handleEmailChange} />
                 </label>
               )}
               {isLogin && (
                 <label>
                   Password:
                   <input type="password" placeholder='Password' value={password} onChange={handlePasswordChange} />
                 </label>
               )}
               {/* {isLogin && (
                 <h5>Forget Password? <p className='forget_password'>need help</p></h5>
               )} */}
               <button className='submit' type="submit">{isLogin ? 'Log in' : 'Sign up'}</button>
             </form>
           </div>
           <div className="right-column" style={rightColumnStyle}>
             {isLogin ? (
               <><p className='login-parah1'><h3>Log in to your account</h3></p>
                 <div>
                   <p className='login-parah2'> Welcome back!</p>
                 </div>
                 <div>
                   <p className='login-parah3'> Continue your journey to a clear skin. </p>
                 </div></>
             ) : (
               <><p className='signup-parah1'><h3>Create New Account</h3></p>
                 <div>
                   <p className='signup-parah2'> Experience the peace of mind </p>
                   <p className='signup-parah2'> that comes with knowing </p>
                   <p className='signup-parah2'> exactly what's going on with your skin. </p>
                 </div></>
             )}
           </div>
         </div>
         <div className="switches">
           <div className={`switch ${isLogin ? 'active' : ''}`} onClick={handleToggle}>Log in</div>
           <div className={`switch ${!isLogin ? 'active' : ''}`} onClick={handleToggle}>Sign up</div>
         </div>
       </div>
     </div><div>
       </div></>
  );
};

export default Login;
