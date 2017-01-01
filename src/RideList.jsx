import React, { Component } from 'react';
import {DriverShape} from './const.jsx'

class RideList extends Component {
	render() {
		return(
			<ul>
        		{this.props.rides.map((ride) => <li key={ride.name}>{ride.name}<br/> is leaving {ride.from}<br/> at {ride.at}</li>)}
        	</ul>
        	  )
	}
}

RideList.propTypes = {
	rides: React.PropTypes.arrayOf(DriverShape)
}

export default RideList;