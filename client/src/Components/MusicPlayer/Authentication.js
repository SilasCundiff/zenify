import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getToken } from '../../actions/auth.js';
import setToken from '../../reducers/auth';
import logo from '../logo.svg';
import './authenticationStyles.css';
function Authentication({ getToken }) {
  useEffect(() => {
    /**
     * Obtains parameters from the hash of the URL
     * @return Object
     */
    const getHashParams = async () => {
      var hashParams = {};
      var e,
        r = /([^&;=]+)=?([^&;]*)/g,
        q = await window.location.hash.substring(1);
      while ((e = r.exec(q))) {
        hashParams[e[1]] = await decodeURIComponent(e[2]);
      }
      let hash = await hashParams.access_token;
      console.log('hash', hash);
      if (hash) {
        console.log('hash found');
        await getToken();
      }
    };
    console.log('use effect');
    getHashParams();
  }, [getToken]);

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
});
export default connect(mapStateTopProps, { getToken, setToken })(
  Authentication
);
