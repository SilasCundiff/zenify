import React from 'react';
import './footer.css';

import icon from '../icon.svg';
function Footer() {
  return (
    <div>
      <div className='footerTextContainer'>
        <div className='linkContainer'>
          <a href='https://github.com/SilasCundiff/zenify'>
            <i class='fab fa-github-square'></i>
          </a>
          <a href='https://developer.spotify.com/documentation/web-api/'>
            <i class='fab fa-spotify'></i>
          </a>
          <a href='https://silas-cundiff.dev/'>
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
      <img src={icon} alt='Silvanus Designs' className='searchLogo' />
    </div>
  );
}

export default Footer;
