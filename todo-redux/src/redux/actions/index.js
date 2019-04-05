import {
  UPDATE_TASK,
  ADD_TASK_TO_LIST,
  REMOVE_ITEM_FROM_LIST,
  MARK_TASK_COMPLETED
} from './actionTypes'

// esto es un tyoe MARK_TASK_COMPLETED

// pilot es un valor usamos task

export const updateTask = Task => {
  return {
    type: UPDATE_TASK,
    payload: task
  }
}
