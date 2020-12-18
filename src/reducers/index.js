//! REMOVE Combine Reducers

import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  counterReducer,
});
export { rootReducer };
