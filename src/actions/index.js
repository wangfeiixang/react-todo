let idNum = 0

export const addTodo = text => {
  // console.log('addTodo--actions--', text)
  return {
    type: 'ADD_TODO',
    id: idNum++,
    text
  }
}
