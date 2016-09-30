import React, { Component } from 'react';

class Contact extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
          Hello Contact!!
          <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default Contact;
