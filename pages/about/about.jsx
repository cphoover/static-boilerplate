import React from 'react';

export default class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: 'Hello!'
		};
	}
	handleChange(event) {
		this.setState({
			message: event.target.value
		});
	}
	render() {
		return <div>
				<h1>{this.state.message}</h1>
			<input type="text" value={ this.state.message } onChange={ this.handleChange.bind(this) } />
		</div>;
	}
	componentDidMount() {
		global.alert('this will happen in the browser');
	}
}
/*
var React = require('react');
var ReactDOM = require('react-dom');
ReactDOM.render(React.createElement(About), document.body);
*/
