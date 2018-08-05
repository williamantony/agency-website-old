import { SET_THEME_STYLE } from '../actions';

const initialState = {
  style: 'light',
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case SET_THEME_STYLE:
      return {
        ...state,
        style: action.payload.style,
      };

    default:
      return state;
  }
};
