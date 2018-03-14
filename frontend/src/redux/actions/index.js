export const UPDATE_HISTORY = 'UPDATE_HISTORY';

export const updateHistory = (history = {}) => {

  return {
    type: UPDATE_HISTORY,
    payload: {
      _history: history,
    },
  };

};
