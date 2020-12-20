import { SET_ACCESS_TOKEN } from '../actions/types';

const initialState = {
  accessToken: null,
  isLoggedIn: false,
};

export default function setToken(state = initialState, action) {
  const { type, payload } = action;
  console.log('payload', action);
  switch (type) {
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: payload.accessToken,
        isLoggedIn: payload.isLoggedIn,
      };
    default:
      return state;
  }
}
