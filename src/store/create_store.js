import { combineReducers, legacy_createStore } from "redux"
import mainReducer from "./main_reducer"

const reducer = combineReducers({
  main: mainReducer,
})

export const store = legacy_createStore(reducer)
