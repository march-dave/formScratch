import React, {Component} from 'react';

class Places extends Component {
  render() {
    return(
      <div>
        loc: {this.props.loc} <br />
        Location: <input value={this.props.search} onChange={this.props.onSearch}
         />

        <h3>Search:{this.props.search2}</h3>

      </div>);
  } 
}

export default Places;