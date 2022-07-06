import { ADD, CHANGE_MESSAGE } from './types'

// ACTION CREATORS
export const add = (upcount = 1) => ({ type: ADD, payload: parseInt(upcount) })
export const changeMessage = (msgNew) => ({ type: CHANGE_MESSAGE, payload: msgNew })
