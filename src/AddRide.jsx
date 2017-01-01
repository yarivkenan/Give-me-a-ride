import React, { Component } from 'react';

class AddRide extends Component {
	constructor(props) {
		super(props)
		this.state={
			name:'',
			from:''
		}
	}

	handleChange(field, event){
		this.setState(Object.assign(...this.state, {[field]: event.target.value}))
	}

	submit(e) {
      	e.preventDefault()
		this.props.addRide(this.state)
		this.setState({
			name:'',
			from:''
		})
	}

	render() {
		return (
		      <form onSubmit={(e) => this.submit(e)}>
		        <label>
		          Name:
		          <input type="text" value={this.state.name} onChange={this.handleChange.bind(this, 'name')}/>
		        </label>
		        <br/>
		        <label>
		          Location:
		          <input type="text" value={this.state.from} onChange={this.handleChange.bind(this, 'from')}/>
		        </label>
		        <br/>
		        <input type="submit" value="Heading out to work" />
		      </form>
		    );
	}
}

AddRide.PropTypes = {
	addRide: React.PropTypes.func
}

export default AddRide;