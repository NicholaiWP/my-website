import React from 'react'
import { Link } from 'react-router-dom';

function VidItem(props) {
    return (
        <>
        <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__vid-wrap' data-category={props.label}>
          <video className='cards__item__vid' src={props.vid} controls autoPlay />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
        </li>   
      </>
    )
}

export default VidItem
