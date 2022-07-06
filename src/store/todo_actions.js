import { FETCHED_TODOS, UPDATE_TODO } from './types'

export const fetchedTodos = (todos) => ({ type: FETCHED_TODOS, payload: todos})
export const updateTodo = (todoUpdated) => ({ type: UPDATE_TODO, payload: todoUpdated })

// ASYNC ACTION CREATOR (= EXECUTED BY THUNK)
export const fetchTodos = () => {
  // with redux thunk we can return a function that will create the action 
  return (dispatch) => {
    fetch("https://ds-todo-api.now.sh/todos")
    .then(res => res.json())
    .then(todosApi => {
      console.log("[API]:", todosApi)
      // dispatch another action
      dispatch(fetchedTodos(todosApi))
    })
  }
}

