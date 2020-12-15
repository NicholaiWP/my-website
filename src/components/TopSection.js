import React from 'react';
import '../App.css';
import './TopSection.css';

function TopSection() {
  return (
    <div className='top-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>WELCOME</h1>
      <p>You can find my projects below</p>
      <div className='top-btns'>
      </div>
    </div>
  );
}

export default TopSection;
