import { SET_REMOTE } from "./actionTypes";
import { initialState } from "./initialState";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_REMOTE: {
      return {
        ...state,
        remote: action.result
      }
    }
    default:
      return state
  }
}

