import React, { Component, ProprTypes } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
             { this.props.text }
          </li>
        </ul>
      </div>
    )
  }
}
