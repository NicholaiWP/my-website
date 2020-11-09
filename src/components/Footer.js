import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-email'>
        <p className='footer-email-heading'>
          Get in contact with me
        </p>
        <p className='footer-email-text'>
          Write me a message
        </p>
        <div>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
              <input
              className='footer-input'
              name='email'
              type='textarea'
              placeholder='Message'
            />
            <Button buttonStyle='btn--outline'>Submit</Button>
          </form>
        </div>
      </section>
      <small class='website-rights'>Nicholai W.P. © 2020</small>
    </div>
  );
}

export default Footer;
