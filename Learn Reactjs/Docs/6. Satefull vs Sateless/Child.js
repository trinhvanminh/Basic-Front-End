import React, { Component } from "react";

class child extends Component {
	render() {
		return <h1>Hey, my name is {this.props.name}!</h1>;
	}
}

export default child;
