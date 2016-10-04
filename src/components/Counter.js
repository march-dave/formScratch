import React, {PropTypes} from 'react';
import Values from './Values';
import Control from './Control';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <Values />
      <Counter />
    </div>);
  }
}

const propTypes = {
};

const defaultProps = {
};
