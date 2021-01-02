import React from 'react';
import './footer.css';

import icon from '../icon.svg';
function Footer() {
  return (
    <div>
      <div className='footerTextContainer'>
        <div className='linkContainer'>
          <a href='#'>
            <i class='fab fa-github-square'></i>
          </a>
          <a href='#'>
            <i class='fab fa-spotify'></i>
          </a>
          <a href='#'>
            <img src={icon} alt='Silvanus Designs' className='footerLogoIcon' />
          </a>
        </div>
        <span className='spotifySpan'>Music provided by Spotify</span>
        <span className='reactSpan'>
          Made with <i class='fas fa-heart'></i> using React
        </span>
        <footer className='footer'>
          Zenify - Silvanus Designs - Silas Cundiff - Copyright&copy; 2021
        </footer>
      </div>
      <img src={icon} alt='Silvanus Designs' className='footerLogo' />
    </div>
  );
}

export default Footer;
