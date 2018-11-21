import { CHANGE_VALUE } from './actionTypes.js';

const changeValue = (value) => ({
  type: CHANGE_VALUE,
  payload: value
});

export default changeValue;
