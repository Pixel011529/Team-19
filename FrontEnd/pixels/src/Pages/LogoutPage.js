import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class LogoutPage extends Component {
	componentDidMount() {
		window.localStorage.removeItem('idToken');
	}
	render() {
		return (
			<div>
				<Redirect to='/' />;
			</div>
		);
	}
}

export default LogoutPage;
