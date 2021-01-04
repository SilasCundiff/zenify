import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getToken } from '../../actions/auth.js';
import setToken from '../../reducers/auth';
import logo from '../logo.svg';
import './authenticationStyles.css';
function Authentication({ getToken, token, isLoggedIn }) {
  useEffect(() => {
    /**
     * Obtains parameters from the hash of the URL
     * @return Object
     */
    const getHashParams = () => {
      if (token === undefined && isLoggedIn === false) {
        var hashParams = {};
        var e,
          r = /([^&;=]+)=?([^&;]*)/g,
          q = window.location.hash.substring(1);
        while ((e = r.exec(q))) {
          hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        let hash = hashParams.access_token;
        if (hash) {
          getToken();
        }
      }
    };
    getHashParams();
  }, [getToken, token, isLoggedIn]);

  return (
    <div className='authenticationBody'>
      <div className='introTitle'>
        Zenify
        <br />
        <span className='introName'> By Silvanus Designs </span>
      </div>
      <img src={logo} alt='Silvanus Designs' className='introLogo' />
      <a href='/login'>
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
