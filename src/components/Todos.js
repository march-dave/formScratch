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

export default Todos;
  // constructor(props) {
  //   super(props);
  //   this.state = { firstname:'', lastname:'', age:'' }
  //   this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
  // }

  // handleFirstNameChange(e) {
  //   console.log('handleFirstNameChange', e.target);
  //   this.setState( { firstname: e.target.value } );
  // }

  // render() {
  //   return (
  //     <form>
  //         <div className="container-fluid">
  //             <label>First Name</label><input onChange={this.handleFirstNameChange} value={this.state.firstname} />
  //           </div>
  //           <div>
  //             <label>Last Name</label> <input value={this.state.lastname} />
  //           </div>
  //           <div>
  //             <label>Age</label> <input value={this.state.age} />
  //           </div>
  //           <button>Click</button>
  //     </form>
  //   )
  // }
