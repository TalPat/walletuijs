import { LOGIN } from '../constants/action-types'

const initialState = {
  session: {
    token : '',
    active
  }
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return (Object.assign({}, state, {articles: state.articles.concat(action.payload)}))
      break
    default:
      return (state)
  }
}

export default rootReducer