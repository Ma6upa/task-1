import { CHANGE_VALUE } from './actionTypes';

export const changeValue = (content) => ({
  type: CHANGE_VALUE,
  payload: {
    variable: content 
  },
})
//+ '_newThingsAddedToTestVariableByRedux'