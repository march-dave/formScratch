import React, { Component } from 'react'

class Todos extends Component {

  constructor(props) {
    super(props);
    this.state = { firstname:'', lastname:'', age:'' }
  }

  render() {
    return (
      <form onSubmit="">
          <div className="container-fluid">
              <label>First Name</label> <input value={this.state.firstname} />
            </div>
            <div>
              <label>Last Name</label> <input value={this.state.lastname} />
            </div>
            <div>
              <label>Age</label> <input value={this.state.age} />
            </div>
            <button>Click</button>
      </form>
    )
  }
}

export default Todos;
