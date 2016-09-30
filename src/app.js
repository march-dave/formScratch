import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Contact from './components/Contact'
import ContactDetails from './components/ContactDetails'

class App extends Component {
  render() {
    return(
      <div>
          This is the React App
          <Contact title={this.props.headerTitle}/>
      </div>
    );
  }
}

ReactDOM.render(<App headerTitle="Ha Ha Ha"/>, document.getElementById('app'))
