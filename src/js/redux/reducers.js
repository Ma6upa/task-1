import { setVariable } from "./actions";
import { CHANGE_VALUE } from "./actionTypes";
import { initialState } from "./initialState";

export default function reducer(state = initialState, action = setVariable) {
  switch (action.type) {
    case CHANGE_VALUE: {
      return {
        ...state,
        variable: action.variable + '_newTest'
      }
    }
    default:
      return state;
  }
}

