import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Hello From Olympians</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/'
              // text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Captain'
              path='/services'
            />
            <CardItem
              src='/'
              // text='Travel through the Islands of Bali in a Private Cruise'
              label='Crew'
              path='/services'
            />
            <CardItem
              src='/'
              // text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Crew'
              path='/services'
            />
            <CardItem
              src='/'
              // text='Experience Football on Top of the Himilayan Mountains'
              label='Crew'
              path='/products'
            />
            <CardItem
              src='/'
              // text='Ride through the Sahara Desert on a guided camel tour'
              label='Crew'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
