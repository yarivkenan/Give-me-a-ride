import React, { Component } from 'react';
import RideList from './RideList.jsx'
import AddRide from './AddRide.jsx'
import moment from 'moment'
import {addRide} from './actions'
import {connect} from 'react-redux'
import GoogleMap from 'google-map-react';
import Place from './Place.jsx';


class App extends Component {

    render() {
      return (<div style={this.props.containerStyle}>
                <div style={this.props.sideBarStyle}>
                  <h1>Give me a ride</h1>
                  <RideList rides={this.props.rides}/>
                  <AddRide addRide={this.props.addRide.bind(this)}/>
                </div>
                <GoogleMap
                  bootstrapURLKeys={{
                    key: 'GoogleApiKey',
                    language: 'en',
                  }}
                  defaultCenter={{lat: 32.1607249, lng: 34.8090371}}
                  defaultZoom={12}>
                  {this.props.places.map((place) => <Place {...place}/>)}
                </GoogleMap>
              </div>)
    }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addRide: (ride) => {
      ride.at = moment().format('h:mmA')
      dispatch(addRide(ride))
    }
  }
}

let mapStateToProps = (state) => {
  return {
    rides: state.rides,
    places: state.places
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
