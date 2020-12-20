import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getToken } from '../../actions/auth.js';
import setToken from '../../reducers/auth';
function Authentication({ getToken, isLoggedIn, token }) {
  //   const [tokens, setTokens] = useState(null);

  /**
   * Obtains parameters from the hash of the URL
   * @return Object
   */
  const getHashParams = () => {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    // console.log('hashParams[0]', hashParams.access_token);
    let hash = hashParams.access_token;
    if (hash) {
      getToken();
    }
  };

  useEffect(() => {
    getHashParams();
  }, []);

  return (
    <div>
      <a href='http://localhost:8888'>
        <button>Login to Spotify</button>
      </a>
    </div>
  );
}

Authentication.propTypes = {
  getToken: PropTypes.func.isRequired,
  token: PropTypes.string,
  isLoggedIn: PropTypes.bool,
};
const mapStateTopProps = (state) => ({
  token: state.setToken.accessToken,
  isLoggedIn: state.setToken.isLoggedIn,
});
export default connect(mapStateTopProps, { getToken, setToken })(
  Authentication
);
