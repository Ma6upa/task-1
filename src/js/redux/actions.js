import { NEXT_IMAGE, PREV_IMAGE, SET_SOURCE, SET_REMOTE } from './actionTypes';

export const setNextImage = (nextImageId) => ({
  type: NEXT_IMAGE,
  nextImageId: nextImageId
})

export const setPrevImage = (prevImageId) => ({
  type: PREV_IMAGE,
  prevImageId: prevImageId
})

export const setSource = (source) => ({
  type: SET_SOURCE,
  source: source,
})

export const setRemote = (result) => ({
  type: SET_REMOTE,
  result: result,
})