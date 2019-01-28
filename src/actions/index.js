let idNum = 0

export const addTodo = (text, isTrue, num) => {
  if (text && text !== '') {
    return {
      type: 'ADD_TODO',
      id: num === -1 ? idNum++ : num,
      text,
      completed: isTrue
    }
  } else {
    return {
      type: 'ERROR'
    }
  }
}
