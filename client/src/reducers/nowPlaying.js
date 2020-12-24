import { SET_CURRENT_SONG } from '../actions/types';

const initialState = {
  artists: '',
  durationMs: 0,
  id: null,
  image: '',
  name: '',
  uri: '',
};

export default function setNowPlaying(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_SONG:
      return {
        ...state,
        artists: payload.artists,
        durationMs: payload.durationMs,
        id: payload.id,
        image: payload.image,
        name: payload.name,
        uri: payload.uri,
        progressMs: payload.progressMs,
      };
    default:
      return state;
  }
}
