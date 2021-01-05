import { SET_SONG_ANALYSIS } from '../actions/types';

const initialState = {
  segments: [],
};
export default function setSongAnalysis(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_SONG_ANALYSIS:
      return {
        ...state,
        segments: payload.segments,
      };
    default:
      return state;
  }
}
