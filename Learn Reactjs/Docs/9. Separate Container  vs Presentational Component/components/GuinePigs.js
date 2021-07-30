// https://www.codecademy.com/learn/react-101/modules/react-102-advanced-react-u/cheatsheet

import React from "react";
// presentational component
export class GuineaPigs extends React.Component {
	render() {
		let src = this.props.src;
		return (
			<div>
				<h1>Cute Guinea Pigs</h1>
				<img src={src} />
			</div>
		);
	}
}
