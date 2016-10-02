import React from 'react';

class ContactDetails extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        Contact Detail Component
        <h1>{this.state.address}</h1>
      </div>
    );
  }
}

export default ContactDetails;
