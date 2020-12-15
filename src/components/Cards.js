import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import 'react-awesome-slider/dist/styles.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of my projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/gop.jpg'
              text='Gift of Parthax is a 2D top-down action-arena game GOP was a game that I was a part of developing during my time in Foldergeist Studios | Indie/Adventure/action game'
              label='Game development'
              external='https://store.steampowered.com/app/795610/Gift_of_Parthax/'
            />
            <CardItem
              src='images/glimpse_2.png'
              text='A virtual diary app made in Android Studio during my Android Exam. Not publically available yet and still in development'
              label='Android development'
            />
             </ul>
         
          <ul className='cards__items'>
            <CardItem
              src='images/whz.png'
              text='An android prototype app developed for the company "Zignifikant"'
              label='Android development'
            />
            <CardItem
              src='images/photo4.jpg'
              text='Insert text'
              label='None'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
