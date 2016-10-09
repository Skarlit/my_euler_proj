import Immutable from "immutable"
import {UPDATE_PROBLEM_INDICES, LOAD_PROBLEM}  from "./actions.js"


export var initialState = Immutable.fromJS({
  problems: {},
  indices: []
})

export function reducer (state = initialState, action) {
  switch(action.type) {
    case UPDATE_PROBLEM_INDICES:
      state = state.update('indices', (v) => Immutable.List(action.payload))
      break;
    case LOAD_PROBLEM:
      state = state.updateIn(['problems', action.id], (v) => Immutable.fromJS(action.problem.manifest));
      break;
  }
  return state;
}
