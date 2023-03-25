import React from 'react';
import Navbar from './components/Home/Navbar';
import Footer from './components/Home/Footer';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HowItWorks from './components/HowItWorks/HowItWorks';
import ImageInput from './components/ImageUploads/ImageUpload';
import SignUp from './components/Login/Login';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/HowItWorks' component={HowItWorks} />
          <Route path='/ImageInput' component={ImageInput} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
