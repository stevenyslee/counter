import { CHANGE_VALUE } from './../actions/actionTypes.js';

const counterValue = (state = 0, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return state + action.payload;
    default:
      return state;
  }
}

export default counterValue;
