import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';
import Option from './Option';
import Map from './Map';
import Places from './Places';

import superagent from 'superagent';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      conactName: 'Contact Me',
      venues: []

    }
    // this.onClickIncrement = this.onClickIncrement.bind(this);
    // const conatactName = "Dave Lee";
  }

  componentDidMount() {


    // https://api.foursquare.com/v2/venues/search?ll=40.7,-74&oauth_token=0DWMXELULH1PCZUJVTPBZ5ISSSD30DIXN2WZGRNEU0KZW23G&v=20161209

    const url = 'https://api.foursquare.com/v2/venues/search?ll=40.7,-74&oauth_token=0DWMXELULH1PCZUJVTPBZ5ISSSD30DIXN2WZGRNEU0KZW23G&v=20161209'
    superagent
    .get(url)
    .query(null)
    .set('Accept', 'text/json')
    .end((err, res) => {
      const venues = res.body.response.venues;
      console.log(venues);
    })

    console.log('App.js componentDidMount ');
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
                
                <div style={ {width:300, height:600, background: 'green'} } >
                  <Map center={location} />
                </div>
                <Places loc="aaa"/>
            </div>



        );
    }

}

export default App;
