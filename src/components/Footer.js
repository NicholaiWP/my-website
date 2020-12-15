import React from 'react';
import './Footer.css';

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
             <input className='' type="submit" value="Submit"></input>
            <p id='contact-information'></p>
          </form>
        </div>
      </section>
      <small class='website-rights'>Nicholai W.P. © 2020</small>
    </div>
  );
}

export default Footer;
