import {
  UPDATE_TASK,
  ADD_TASK_TO_LIST,
  REMOVE_ITEM_FROM_LIST,
  MARK_TASK_COMPLETED
} from '../action/actionTypes'


const INITAL_STATE = {
  task: '',
  list: []
}
// iniciamos la arrow function con INITAL_STATE
export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_TASK:

      task = action.payload
      return {
        ...state,
        task
      }
    default:
      return state
  }
}
