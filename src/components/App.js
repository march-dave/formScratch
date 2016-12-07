import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';
import Option from './Option';
import Contact from './Contact';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      conactName: 'Contact Me'
    }
    // this.onClickIncrement = this.onClickIncrement.bind(this);
  }

  // onClickIncrement(e) {
  //   this.setState({
  //     conactName: e.target.value
  //   })
  // }

    render(){
        return (
            <div style={ {textAlign: 'center'} }>
                <Counter/>
                <Option/>
                <Buttons/>
                <Contact myname={this.state.conactName}/>
            </div>
        );
    }

}

export default App;
