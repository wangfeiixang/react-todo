import { combineReducers } from 'redux'

const todos = (state = [], action) => {
  if (action.type === 'ADD_TODO' && action.text) {
    return [
      ...state,
      {
        id: action.id,
        text: action.text,
        completed: action.completed
      }
    ]

  } else {
    return state
  }
}

const todoApp = combineReducers({
  todos
})

export default todoApp
