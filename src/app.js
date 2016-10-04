import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Contact from './components/Contact'
import ContactDetails from './components/ContactDetails'

// import Counter from './components/Counter'

class App extends Component {

  render() {
    return(
      <div>
          <ContactDetails />
          This is the React App
          <Contact title={this.props.headerTitle} myname={this.props.firstName} />

        
      </div>
    );
  }
}

ReactDOM.render(<App headerTitle="Ha Ha Ha" firstName="Dave" />, document.getElementById('app'))
