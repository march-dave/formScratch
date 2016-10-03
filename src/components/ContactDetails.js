import React from 'react';

class ContactDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "New York22"
    }

    this.addressUpdate = this.addressUpdate.bind(this);
  }

  addressUpdate() {
    this.setState({
      address: "NJ"
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.address}: hhh</h1>
        <button onClick={this.addressUpdate}>Address Click</button>
      </div>
    );
  }
}

export default ContactDetails;
