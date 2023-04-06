import React, { useState, useEffect } from 'react';
import ButtonNav from './ButtonNav';
import { Link, useHistory } from 'react-router-dom';
import logo from '../Images/Logo1.png';
import menu from '../Images/Menu_bar.png';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const history = useHistory();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 720) {
      setClick(false);
    } else {
      setClick(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const handleButtonClick = () => {
    history.push('/Login');
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logo} className='app-logo' alt='logo' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <img src={menu} className='app-menu' alt='menu' />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/HowItWorks' className='nav-links' onClick={closeMobileMenu}>
                How It Works
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/ImageInput' className='nav-links' onClick={closeMobileMenu}>
                Input Image
              </Link>
            </li>
          </ul>
          <ButtonNav buttonStyle='btn--outline' onClick={handleButtonClick}>
            Login / SignUp
          </ButtonNav>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
