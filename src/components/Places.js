import React, {Component} from 'react';

class Places extends Component {
  render() {


    // let { tenants } = this.props
    // let display = tenants.length && tenants.map(tenant => <Tenant key={tenant._id} tenant={tenant} />);
    
    const list = this.props.venues.map(
      (venue, i) => {
          return (
              <li key={i}>{venue.name}</li>
          )
      }
    )

    

    return(
      <div>

        <div> venues
            <ol>
                {list}
            </ol>
        </div>

        loc: {this.props.loc} <br />
        Location: <input value={this.props.search} onChange={this.props.onSearch}
         />

        <h3>Search:{this.props.search2}</h3>
        <button className="btn">Click</button>

      </div>);
  } 
}

export default Places;