import { LOGIN } from '../constants/action-types'

const initialState = {
  session: {
    token : '',
    active: false
  }
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return (Object.assign({}, state, {session: action.payload}))
      break
    default:
      return (state)
  }
}

export default rootReducer