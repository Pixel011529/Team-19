import React, { Component } from 'react';

import LoginPageContainer from '../Components/LoginPageComponents/LoginPageContainer';

class LoginPage extends Component {
	render() {
		const { history } = this.props;
		return (
			<div className='container container--login'>
				<LoginPageContainer history={history} />
			</div>
		);
	}
}

export default LoginPage;
