import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
// import Image1 from '../Images/Image1.jpg';
// import Image2 from '../Images/Image2.jpg';
// import Image3 from '../Images/Image3.jpg';
// import Image4 from '../Images/Image4.jpg';
// import Image5 from '../Images/Image5.jpg';

function Cards() {
  return (
    <div className='Cards'>
      <h1> Hello! From Olympians :) </h1>
      <div className = 'aboutus__description'>
        We are <b> Level 5 Computer Science </b> students studying at <b> IIT </b>.
        
        <div className='aboutus__container'>
          <div className='aboutus__wrapper'>
            <p>Welcome to the world of Olympians, a group of students who have come together to create a unique software development project. The project is focused on developing a website that uses image recognition technology to detect various skin diseases. This website will be an incredible tool for anyone who is concerned about their skin health and wants to detect potential skin conditions early on.</p>
            <p>As part of their second-year university project, the Olympians have combined their skills and expertise in software development and machine learning to create a website that is user-friendly and efficient. The website uses a learning algorithm to analyze images of skin and identify various skin conditions with a high degree of accuracy. Their aim is to create a website that is accessible to everyone and can help detect skin conditions early on.</p>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Cards;
