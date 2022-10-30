export const getTodos = () => {
  if (localStorage.getItem('todos')) return JSON.parse(localStorage.getItem('todos') as string)
  else return []
}

export const findTodoItem = (id: string) => {
  const todos = getTodos()
  return todos.find((todo: Todo) => todo.id === id)
}

export const setTodoListToLocalStorage = (todos: Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

export const setTodoItem = (item: Todo) => {
  let todos = getTodos()
  if (item.id) {
    todos = todos.map((todo: Todo) => {
      if (todo.id === item.id) {
        return item
      } else return todo
    })
  } else {
    todos.push({ ...item, id: String(new Date().valueOf()) })
  }
  setTodoListToLocalStorage(todos)
}
