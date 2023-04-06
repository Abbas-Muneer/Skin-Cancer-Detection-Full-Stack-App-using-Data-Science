import React from 'react';
import '../../App.css';
import Buttons from './Buttons';
import Buttonss from './Buttonss';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <image src = '/Image1.jpg' /> */}
      <h1>Skin X</h1>
      <p>Your Skin Deserves The Best, So Do You :)</p>
      <div className='hero-btns'>
        <Buttons
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Buttons>
        <Buttonss
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          How Does It Works <i className='far fa-play-circle' />
        </Buttonss>
      </div>
    </div>
  );
}

export default HeroSection;
