import {
  UPDATE_TASK,
  ADD_TASK_TO_LIST,
  REMOVE_ITEM_FROM_LIST,
  MARK_TASK_COMPLETED
} from '../actions/actionTypes'

const INITAL_STATE = {
  task: '',
  list: []
}

export default (state = INITAL_STATE, action) => {

  let { task, list } = state;
  let newList; // se anexa una nueva variable, para no mutar

  switch (action.type) {
    case UPDATE_TASK:
      task = action.payload
      return { ...state, task }

    case ADD_TASK_TO_LIST:
      list.push({
        task,
        completed: false
      })
      task = ''
      return { ...state, task, list }

    case REMOVE_ITEM_FROM_LIST:
      newList = JSON.parse(JSON.stringify(list))
      newList.splice(action.payload, 1)
      return { ...state, list: newList}

    case MARK_TASK_COMPLETED:
      let index = action.payload
      newList = JSON.parse(JSON.stringify(list))
      newList[index].completed = !newList[index].completed
      return { ...state, list: newList}

    default:
      return state
  }
}

// el problema que se tuvo la clase anterior era que no haciamos una nueva variable de list, por lo que no debemos mutar los estados directamente
