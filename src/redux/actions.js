import { SET_REMOTE, SET_REMOTE_AUDIO } from './actionTypes';

export const setRemote = (result) => ({
  type: SET_REMOTE,
  result: result,
})

export const setRemoteAudio = (audio) => ({
  type: SET_REMOTE_AUDIO,
  audio: audio,
})