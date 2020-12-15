import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import 'react-awesome-slider/dist/styles.css';
import VidItem from './VidItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of my projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/gop.jpg'
              alt='Gift of Parthax image'
              text='Gift of Parthax is a 2D top-down action-arena game GOP was a game that I was a part of developing during my time in Foldergeist Studios | Indie/Adventure/action game'
              label='Game development'
            />
            <CardItem
              src='images/glimpse_2.png'
              alt='Glimpse image'
              text='A virtual diary app made in Android Studio during my Android Exam. Not publically available yet and still in development'
              label='Android development'
            />
             </ul>
         
          <ul className='cards__items'>
            <CardItem
              src='images/whz.png'
              alt='Warehouze app image'
              text=' Android app prototype which utilizes the company´s stock system ’Warehouze.io’'
              label='Android development'
            />
            <VidItem
              vid='/videos/bounce.mp4'
              alt='Bounce app image'
              text='Android game developed during my computer science degree'
              label='Android development'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
