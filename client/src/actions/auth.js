import { SET_ACCESS_TOKEN } from './types';

// let newToken;

// const getHashParams = async () => {
//   var hashParams = {};
//   var e,
//     r = /([^&;=]+)=?([^&;]*)/g,
//     q = window.location.hash.substring(1);
//   while ((e = r.exec(q))) {
//     hashParams[e[1]] = decodeURIComponent(e[2]);
//   }
//   newToken = hashParams.access_token;
// };
export const getToken = (hash) => (dispatch) => {
  // getHashParams();
  if (hash !== null) {
    return dispatch({
      type: SET_ACCESS_TOKEN,
      payload: {
        accessToken: hash,
        isLoggedIn: true,
      },
    });
  }
};
