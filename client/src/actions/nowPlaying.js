import { SET_CURRENT_SONG } from './types';

export const setNowPlaying = (state) => (dispatch) => {
  console.log('newState', state);
  return dispatch({
    type: SET_CURRENT_SONG,
    payload: {
      artists: state.artists,
      durationMs: state.durationMs,
      id: state.id,
      image: state.image,
      name: state.name,
      uri: state.uri,
    },
  });
};
