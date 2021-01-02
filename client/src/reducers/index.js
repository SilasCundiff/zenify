import { combineReducers } from 'redux';
import setToken from './auth';
import setNowPlaying from './nowPlaying';
import setSongAnalysis from './songAnalysis';
export default combineReducers({
  setToken,
  setNowPlaying,
  setSongAnalysis,
});
