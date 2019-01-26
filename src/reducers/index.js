import { combineReducers } from 'redux';

const todos = (state = [], action) => {
  if (action.type === 'ADD_TODO') {
    console.log('state--', state);
    return [
      ...state,
      {
        id: action.id,
        text: action.text,
        completed: false
      }
    ];
  } else {
    return state;
  }
};

const todoApp = combineReducers({
  todos
});

export default todoApp;
