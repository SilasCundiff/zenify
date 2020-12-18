//!REMOVE set an initial state so your component doesn't have an undefined prop
const initialState = {
  count: 0,
};

//!REMOVE reducer takes in state from the store, and an action type from where it was dispatched
function counterReducer(state = initialState, action) {
  switch (action.type) {
    //!REMOVE example of an action type is INCREMENT and  you return the updated state
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
    default:
      //!REMOVE always return state by default so that store doesn't get messed up 
      return state;
  }
}
export default counterReducer;
