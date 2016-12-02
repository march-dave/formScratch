import React, { Component } from 'react'

class Todos extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
          <input value={this.props.firstname} />
          <button onClick={this.props.updateProps}>
            
          </button>
      </div>
      );
  }

}
