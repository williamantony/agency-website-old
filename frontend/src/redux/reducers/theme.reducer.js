import { SET_THEME_STYLE } from '../actions';

const initialState = 'light';

export default (state = initialState, action) => {
  switch (action.type) {
    
    case SET_THEME_STYLE:
      return action.payload;

    default:
      return state;
  }
};
