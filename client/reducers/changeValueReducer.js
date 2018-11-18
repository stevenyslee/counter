import { CHANGE_VALUE } from './../actions/actionTypes.js';

export const changeValueReducer = (state = 0, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return state + action.payload;
    default:
      return state;
  }
}

