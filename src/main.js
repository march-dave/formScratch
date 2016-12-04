import React from 'react'

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import todoApp from './reducres/reducers'

let store = createStore(todoApp)

render(
    <Pvoider store={store}>
        <App />
    </Provider>,

    app
)