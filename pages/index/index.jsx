import React from 'react';
import Navigation from '../../components/navigation/navigation.jsx'

export default class Index extends React.Component {
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
				<Navigation/>
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
ReactDOM.render(React.createElement(Index), document.body);
*/
