import { SET_NAVIGATION_VISIBILITY } from '../actions';

const initialState = {
  isVisible: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case SET_NAVIGATION_VISIBILITY:
      return {
        ...state,
        isVisible: action.payload.isVisible,
      };

    default:
      return state;
  }
};
