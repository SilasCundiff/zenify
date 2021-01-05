import { SET_ACCESS_TOKEN } from './types';

export const getToken = (hash) => (dispatch) => {
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
