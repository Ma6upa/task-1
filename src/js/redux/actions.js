import { CHANGE_VALUE } from './actionTypes';

export const setVariable = (variable) => ({
  type: CHANGE_VALUE,
  variable: variable
})
