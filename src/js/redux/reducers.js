import { changeValue } from "./actions";
import { CHANGE_VALUE } from "./actionTypes";
import { initialState } from "./initialState";

export default function reducer(state = initialState, action = changeValue) {
  switch (action.type) {
    case CHANGE_VALUE: {
      return {
        ...state, content: action.payload + 'newTest'
      }
    }
    default:
      return state;
  }
}

