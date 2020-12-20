import { SET_ACCESS_TOKEN } from './types';

let newToken;

const getHashParams = async () => {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  newToken = hashParams.access_token;
};

// import getHashParams from '../utils/getHashParams';
export const getToken = () => (dispatch) => {
  getHashParams();
  console.log('newToken', newToken);
  if (newToken !== null) {
    return dispatch({
      type: SET_ACCESS_TOKEN,
      payload: {
        accessToken: newToken,
        isLoggedIn: true,
      },
    });
  }
};
