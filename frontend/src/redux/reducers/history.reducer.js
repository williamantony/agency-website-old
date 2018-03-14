import { UPDATE_HISTORY } from '../actions';

const initialState = { };

export default (state = initialState, action) => {
  switch (action.type) {
    
    case UPDATE_HISTORY:
      return action.payload._history;

    default:
      return state;
  }
};
