import {
  UPDATE_TASK,
  ADD_TASK_TO_LIST,
  REMOVE_ITEM_FROM_LIST,
  MARK_TASK_COMPLETED
} from './actionTypes'

export const updateTask = value => {
  return {
    type: UPDATE_TASK,
    payload: value
  }
}

export const addTaskToList = () => {
  return {
    type: ADD_TASK_TO_LIST,
    payload: null
  }
}

export const removeItemFromList = index => {
  return {
    type: REMOVE_ITEM_FROM_LIST,
    payload: index
  }
}

export const markTaskCompleted = index => {
  return {
    type: MARK_TASK_COMPLETED,
    payload: index
  }
}
