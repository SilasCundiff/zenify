import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getToken } from '../../actions/auth.js';
import setToken from '../../reducers/auth';

function Authentication({ getToken }) {
  useEffect(() => {
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
      let hash = hashParams.access_token;
      if (hash) {
        getToken();
      }
    };
    getHashParams();
  }, [getToken]);

  return (
    <div>
      <a href='http://localhost:8888'>
        <button>Login to Spotify</button>
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
