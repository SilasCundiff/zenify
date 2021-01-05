import { SET_SONG_ANALYSIS } from './types';

export const setSongAnalysis = (state) => (dispatch) => {
  return dispatch({
    type: SET_SONG_ANALYSIS,
    payload: {
      segments: state.segments,
    },
  });
};
