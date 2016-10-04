import React, { Component, PropTypes } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  render() {
    return (
      <ul>
          {this.props.todos.map(todo =>
          <Todo
          Key = {todo.id}
          {...todo}
          />
        )}
      </ul>
    )
  }
}
