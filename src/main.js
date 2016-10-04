import React from 'react'

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './app'
import todoApp from './reducres/reducres'

let store = creatStore(todoApp)
let rootElement = document.getElementById('app')

render (
  <Provider store = {store}>
    <App />
  <Provider>,

    rootElement
)
