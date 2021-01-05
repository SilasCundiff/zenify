import { SET_ACCESS_TOKEN } from './types';

let newToken;

const getHashParams = async () => {
  console.log('inside get hash params in action');
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  console.log('hashParams', hashParams);
  newToken = await hashParams.access_token;
  console.log('newToken', newToken);
};
export const getToken = () => async (dispatch) => {
  await getHashParams();
  console.log('inside of dispatch');
  if (newToken !== null) {
    console.log('new token true');
    return dispatch({
      type: SET_ACCESS_TOKEN,
      payload: {
        accessToken: newToken,
        isLoggedIn: true,
      },
    });
  }
};
