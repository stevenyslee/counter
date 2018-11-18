import { CHANGE_VALUE } from './actionTypes.js';

export const changeValue = (value) => ({
  type: CHANGE_VALUE,
  payload: value
});
