import { FETCHED_TODOS, UPDATE_TODO } from './types'

let initialToDoState = {
  todos: []
}

const todoReducer = (state = initialToDoState, action) => {
  console.log("ToDo Reducer called: ", action)

  switch (action.type) {
    case FETCHED_TODOS:
      console.log("Full state (todos): ", state)
      return { ...state, todos: action.payload }
    case UPDATE_TODO:
      let todosCopy = [...state.todos]
      console.log("Copy:", todosCopy)
      let todoFound = todosCopy.find((todo) => todo._id === action.payload._id)
      todoFound.status = !todoFound.status
      console.log("[REDUCER] UPDATED TODOS: ", todoFound, todosCopy)
      return { ...state, todos: todosCopy }
    // invalid action => no change to state
    default:
      return state
  }
}

export default todoReducer