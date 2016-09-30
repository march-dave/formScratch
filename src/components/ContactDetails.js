import React from 'react';

export default class ContactDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Contact Detail Component
        <h1>{this.props.address}</h1>
      </div>
    );
  }
}
