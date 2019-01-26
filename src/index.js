import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
// import { addTodo } from './actions'

const store = createStore(rootReducer)

// console.log('app--store--before--', store, 'getState--', store.getState())

// store.dispatch(addTodo('Learn about actions'))

// console.log('app--store--after--', store, 'getState--', store.getState())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
