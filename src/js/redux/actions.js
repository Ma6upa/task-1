import { NEXT_IMAGE, PREV_IMAGE, SET_SOURCE, SET_RESULT } from './actionTypes';

export const setNextImage = (nextImageId) => ({
  type: NEXT_IMAGE,
  payload: nextImageId
})

export const setPrevImage = (prevImageId) => ({
  type: PREV_IMAGE,
  payload: prevImageId
})

export const setSource = (source) => ({
  type: SET_SOURCE,
  payload: source,
})

export const setResult = (result) => ({
  type: SET_RESULT,
  payload: result,
})