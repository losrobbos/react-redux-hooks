import { ADD, CHANGE_MESSAGE } from './types'

let initialState = {
  count: 0,
  message: 'wohoooh',
}

const mainReducer = (state = initialState, action) => {

  console.log("Reducer called: ", action)

  switch (action.type) {
    case ADD:
      let upCount = action.payload || 1
      return {
        ...state,
        count: state.count + upCount,
      }
    case CHANGE_MESSAGE:
      console.log("Full state:", state)
      return { ...state, message: action.payload }
    // invalid action => no change to state
    default:
      return state 
  }

}

export default mainReducer