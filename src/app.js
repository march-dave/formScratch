import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Contact from './components/Contact'
import ContactDetails from './components/ContactDetails'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      "addressDisplay": "New York"
    }
    this.updateButton = this.updateButton.bind(this);
  }

  updateButton() {
    this.setState({
      addressDisplay: "Toronto"
    })
    console.log('addressDisplay', this.setState.addressDisplay);
  }

  render() {
    return(
      <div>
          <ContactDetails address={this.addressDisplay} />
          This is the React App
          <Contact title={this.props.headerTitle} myname={this.props.firstName} />
          <button onClick={this.updateButton}>On Click Button</button>
      </div>
    );
  }
}

ReactDOM.render(<App headerTitle="Ha Ha Ha" firstName="Dave" />, document.getElementById('app'))
