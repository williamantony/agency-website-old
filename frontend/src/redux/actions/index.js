export const SET_NAVIGATION_VISIBILITY = 'SET_NAVIGATION_VISIBILITY';

export const setNavigationVisibility = (isVisible = false) => {
  return {
    type: SET_NAVIGATION_VISIBILITY,
    payload: {
      isVisible,
    },
  };
};



export const SET_THEME_STYLE = 'SET_THEME_STYLE';

export const setThemeStyle = (style) => {
  return {
    type: SET_THEME_STYLE,
    payload: {
      style,
    },
  };
};


/**
 * Form Input
 */
export const CREATE_FORM = 'CREATE_FORM';

export const createForm = (form) => {
  return {
    type: CREATE_FORM,
    payload: {
      form,
    },
  };
};

export const SET_INPUT = 'SET_INPUT';

export const setInput = (form, name, value) => {
  return {
    type: SET_INPUT,
    payload: {
      form,
      name,
      value,
    },
  };
};
