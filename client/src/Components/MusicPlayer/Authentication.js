import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getToken } from '../../actions/auth.js';
import setToken from '../../reducers/auth';
import logo from '../logo.svg';
import './authenticationStyles.css';
function Authentication({ getToken, token, isLoggedIn }) {
  const [tryLogin, setTryLogin] = useState(false);

  useEffect(() => {
    if (tryLogin) {
      getToken();
    }
  }, [getToken, tryLogin]);
  const handleClick = () => {
    setTryLogin(true);
  };
  return (
    <div className='authenticationBody'>
      <div className='introTitle'>
        Zenify
        <br />
        <span className='introName'> By Silvanus Designs </span>
      </div>
      <img src={logo} alt='Silvanus Designs' className='introLogo' />
      <a href='/login' onClick={handleClick}>
        <button className='loginButton'>Spotify Login Required</button>
      </a>
    </div>
  );
}

const mapStateTopProps = (state) => ({
  token: state.setToken.accessToken,
  isLoggedIn: state.setToken.isLoggedIn,
});
export default connect(mapStateTopProps, { getToken, setToken })(
  Authentication
);
