import React from 'react';
import Todos from './components/Todos'

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      name: ''
    }

    this.updataState = this.updataState.bind(this);
  }

  updataState() {
    this.setState( {
      name: 'this is event'
    })
  }

  render() {
    return (
      <div>

        <Todos firstname={this.state.name} updateProps={this.updataState}/>

      </div>
    );
  }
}

export default App;
