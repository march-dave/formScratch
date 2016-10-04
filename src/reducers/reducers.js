import { combineReducres } from 'redux'
import { ADD_TODO } '../actions/actions'

function todo(state, action) {
  switch (action.type) {

    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
      }

      default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {

    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ]

      default:
      return state
  }
}

const todoApp = combineReducres({
  todos
})

export default todoApp
