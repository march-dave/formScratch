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
      venues: [],

      search: "New York",
      search2: ""

    }

    this.upDataSearch = this.upDataSearch.bind(this);
  }

  upDataSearch(e) {

    console.log('upDataSearch', e.target.value)

    this.setState( {
      search2: e.target.value
    } )
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


  }

  render(){

    const location = {
      lat: 40.7575285,
      lng: -73.9884469
    }

    const markers = [
      {
        location: {
          lat: 40.7575285,
          lng: -73.9884469
        }
      }
    ]

    return (
        <div style={ {textAlign: 'center'} }>
            <Counter/>
            <Option/>
            <Buttons/>
            
            {this.state.search2}
            
            <Places loc="aaa" onSearch={this.upDataSearch} venus={this.state.venus} />

            <div style={ {width:300, height:600, background: 'green'} } >
              <Map center={location} markers={markers} />
            </div>

        </div>

    );
  }

}

export default App;
