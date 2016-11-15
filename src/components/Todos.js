import React, { Component } from 'react'

class Todos extends Component {

  constructor(props) {
    super(props);
    this.state = { itmes:[], firstname:'', lastname:'', age:'' }
  }

  render() {
    return (
      <form onClick="">
          <div className="container-fluid">
              <label>First Name</label> <input value={this.state.firstname} />
            </div>
            <div>
              <label>Last Name</label> <input value={this.state.lastname} />
            </div>
            <div>
              <label>Age</label> <input value={this.state.age} />
            </div>
      </form>
    )
  }
}

export default Todos;
