import React from 'react'
var ReactCSSTransitGroup = require('react-addons-css-transition-group');


class App exnteds React.Component {
  construrctor(props) {
    super(props);

    this.state = {
      data: 'Initial data...'
    }

    this.updateState = this.updateState.bind(this);
  };

  render (
    return (
      <div>
          <button onClick={this.updateState}>CLICK</button>
          <h4>{this.state.data}</h4>

          <ReactCSSTransitionGroup transitionName="example"
            transitionAppear={true} transitionAppearTimeut={500}
            transitionEnter={false} transitionLeave={false}>
            <h1>My Element...</h1>
          </ReactCSSTransitionGroup>
      </div>
    )
  )

}
