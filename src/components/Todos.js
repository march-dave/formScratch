import React, { Component } from 'react'

class Todos extends Component {

  constructor(props, context) {
    super(props);
    this.state = { itmes:[], text: ''}
  }

  render() {
    return (
      <form>
          <div className="container-fluid">
              <label>First Name</label> <input text='firstName' />
            </div>
            <div>
              <label>Last Name</label> <input text='lasttName' />
            </div>
            <div>
              <label>Age</label> <input text='ageName' />
            </div>
      </form>
    )
  }
}

export default Todos;
