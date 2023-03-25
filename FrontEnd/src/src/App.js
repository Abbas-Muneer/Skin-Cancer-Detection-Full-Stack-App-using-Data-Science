import React from 'react';
import Navbar from './components/Home/Navbar';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Products from './components/pages/Products';
import SignUp from './components/Login/Login';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/HowItWorks' component={HowItWorks} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
