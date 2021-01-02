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
        <button
          style={{
            position: 'relative',
            padding: '10px',
            borderRadius: '5%',
            margin: '20px 10px 20px 20px',
            background: '#1DB954',
            color: '#fff',
            border: 'none',
            transition: 'all .5s cubic-bezier(1, 0, 0, 1)',
          }}
        >
          Spotify Login Required to play Music
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
