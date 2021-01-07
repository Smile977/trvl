import React from 'react';
import {CardItem} from "./CardItem";
import "./Cards.css";

export const Cards = () => {

  return (
    <div className="cards">
      <h1>Check out there EPIC Destination!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className='cards__items'>
            <CardItem
              pageImage="img1"
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              pageImage="img2"
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              pageImage="img3"
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              pageImage="img4"
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              pageImage="img5"
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}