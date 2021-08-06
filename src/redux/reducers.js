import { SET_REMOTE, SET_REMOTE_AUDIO } from "./actionTypes";
import { initialState } from "./initialState";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_REMOTE: {
      return {
        ...state,
        remote: action.result
      }
    }
    case SET_REMOTE_AUDIO: {
      return {
        ...state,
        remoteAudio: action.audio
      }
    }
    default:
      return state
  }
}