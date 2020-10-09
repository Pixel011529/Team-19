import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavbarItem extends Component {
	render() {
		let { name, link, isAuthenticated } = this.props;
		if (name === 'Login' && isAuthenticated) {
			name = 'Logout';
			link = '/logout';
		}

		if (name === 'My House' && !isAuthenticated) {
			return null;
		}
		return (
			<li className='navbar__item'>
				<NavLink
					to={`${link}`}
					exact
					activeClassName='navbar__link--active'
					className='navbar__link'
				>
					{name}
				</NavLink>
			</li>
		);
	}
}

export default NavbarItem;
