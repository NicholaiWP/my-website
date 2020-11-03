import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some games that I've developed!</h1>
   <AwesomeSlider>
    <div data-src="images/gop.jpg" />
    <div data-src="images/photo2.jpg" />
    <div data-src="images/photo3.jpg" />
  </AwesomeSlider>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/gop.jpg'
              text='Gift of Parthax is a 2D top-down action-arena game GOP was a game that I was a part of developing during my time in Foldergeist Studios'
              label='Indie/Adventure/action game'
            />
            <CardItem
              src='images/photo2.jpg'
              text='Insert text'
              label='None'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/photo3.jpg'
              text='Insert text'
              label='None'
            />
            <CardItem
              src='images/photo4.jpg'
              text='Insert text'
              label='None'
            />
            <CardItem
              src='images/photo5.jpg'
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
