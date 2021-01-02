import { SET_SONG_ANALYSIS } from './types';

export const setSongAnalysis = (state) => (dispatch) => {
  // console.log('newSonganalysis', state);
  return dispatch({
    type: SET_SONG_ANALYSIS,
    payload: {
      bars: state.bars,
      beats: state.beats,
      sections: state.sections,
      segments: state.segments,
      tatums: state.tatums,
      track: state.track,
    },
  });
};
