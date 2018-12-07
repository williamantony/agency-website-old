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
    payload: style,
  };
};
