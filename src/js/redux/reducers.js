import { changeValue } from "./actions";
import { initialState } from "./initialState";

export default function reducer(state = initialState, action = changeValue) {
  return action;
}

