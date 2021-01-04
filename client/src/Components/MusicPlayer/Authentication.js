import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getToken } from '../../actions/auth.js';
import setToken from '../../reducers/auth';
import logo from '../logo.svg';
import './authenticationStyles.css';
function Authentication({ getToken }) {

  const handleClick = () => {
    setTimeout(() => {
      getToken();
      console.log('this happened');
    }, 2000);
  };
  return (
    <div className='authenticationBody'>
      <div className='introTitle'>
        Zenify
        <br />
        <span className='introName'> By Silvanus Designs </span>
      </div>
      <img src={logo} alt='Silvanus Designs' className='introLogo' />
      <a href='/login'>
        <button className='loginButton' onClick={handleClick}>
          Spotify Login Required
        </button>
      </a>
    </div>
  );
}

const mapStateTopProps = (state) => ({
  token: state.setToken.accessToken,
});
export default connect(mapStateTopProps, { getToken, setToken })(
  Authentication
);
