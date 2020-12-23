import { combineReducers } from 'redux';
import setToken from './auth';
import setNowPlaying from './nowPlaying';
export default combineReducers({
  setToken,
  setNowPlaying,
});
