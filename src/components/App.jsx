import React from 'react'

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
      </div>
    )
  )

}
