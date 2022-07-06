import { combineReducers, legacy_createStore } from "redux"
import mainReducer from "./main/reducer"
import todoReducer from "./todo/reducer"

const reducer = combineReducers({
  main: mainReducer,
  todos: todoReducer
})

export const store = legacy_createStore(reducer)
