import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Contact from './components/Contact'
import ContactDetails from './components/ContactDetails'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }

    this.updateButton = this.updateButton.bind(this);
  }

  updateButton() {
    // this.props.onUpdate();
    // console.log('update', props);

    // this.setState({
    //   value: this.state.value + 1;
    // })

    console.log('updateButton: ' + this.state.value);

  }

  render() {

    this.setState = ({
      name: "call me dave"
    })

    return(
      <div>
          <ContactDetails address={this.props.addressDisplay} />
          This is the React App
          <Contact title={this.props.headerTitle} myname={this.props.firstName} />

          <button onClick={this.updateButton}>On Click Button</button>

      </div>
    );
  }
}

ReactDOM.render(<App headerTitle="Ha Ha Ha" firstName="Dave" addressDisplay="New York"/>, document.getElementById('app'))
