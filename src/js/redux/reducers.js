import { NEXT_IMAGE, PREV_IMAGE, SET_REMOTE, SET_SOURCE } from "./actionTypes";
import { initialState } from "./initialState";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_IMAGE: {
      return {
        ...state,
        imageId: action.nextImageId
      }
    }
    case PREV_IMAGE: {
      return {
        ...state,
        imageId: action.prevImageId
      }
    }
    case SET_SOURCE: {
      return {
        ...state,
        imgSource: action.source
      }
    }
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

