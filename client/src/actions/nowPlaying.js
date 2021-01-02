import { SET_CURRENT_SONG } from './types';

export const setNowPlaying = (state) => (dispatch) => {
  let track = state.track;
  return dispatch({
    type: SET_CURRENT_SONG,
    payload: {
      isPlaying: state.isPlaying,
      artists: track.artists,
      durationMs: track.durationMs,
      id: track.id,
      image: track.image,
      name: track.name,
      uri: track.uri,
      progressMs: state.progressMs,
    },
  });
};
