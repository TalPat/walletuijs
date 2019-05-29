import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./components/App"
import { createStore } from 'redux'
import rootReducer from './reducers'

const rootElement = document.getElementById("root")
const store = createStore(rootReducer)

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  rootElement
)