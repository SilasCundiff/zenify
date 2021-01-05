import { SET_SONG_ANALYSIS } from '../actions/types';

const initialState = {
  bars: [],
  beats: [],
  sections: [],
  segments: [],
  tatums: [],
  track: {},
};
export default function setSongAnalysis(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_SONG_ANALYSIS:
      return {
        ...state,
        bars: payload.bars,
        beats: payload.beats,
        sections: payload.sections,
        segments: payload.segments,
        tatums: payload.tatums,
        track: { ...payload.track },
      };
    default:
      return state;
  }
}
