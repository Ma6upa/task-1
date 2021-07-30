import { NEXT_IMAGE, PREV_IMAGE, SET_RESULT, SET_SOURCE } from "./actionTypes";
import { initialState } from "./initialState";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_IMAGE: {
      return {
        ...state,
        imageId: action.payload
      }
    }
    case PREV_IMAGE: {
      return {
        ...state,
        imageId: action.payload
      }
    }
    case SET_SOURCE: {
      return {
        ...state,
        imgSource: action.payload
      }
    }
    case SET_RESULT: {
      return {
        ...state,
        remote: action.payload
      }
    }
    default:
      return state
  }
}

