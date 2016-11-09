import React, { Component } from 'react'
import TodoList from './TodoList'

export default class Todos extends Component {

  constructor(props) {
    super(props);
    this.state = { itmes:[], text: ''}
  }


  render() {
    return (
      <div>

        <TodoList itmes={this.state.items}/>

        <form>

        <input />
        <button />

        </form>

      </div>
    )
  }
}
