import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';
import Option from './Option';
import Map from './Map';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      conactName: 'Contact Me'
    }
    // this.onClickIncrement = this.onClickIncrement.bind(this);
    // const conatactName = "Dave Lee";
  }


  // onClickIncrement(e) {
  //   this.setState({
  //     conactName: e.target.value
  //   })
  // }

    render(){

      const location = {
        lat: 40.7575285,
        lng: -73.9884469
      }

        return (
            <div style={ {textAlign: 'center'} }>
                <Counter/>
                <Option/>
                <Buttons/>
                
                <div style={ {width:300, height:600, background: 'red'} } >
                  <Map center={location} />
                </div>

            </div>



        );
    }

}

export default App;
