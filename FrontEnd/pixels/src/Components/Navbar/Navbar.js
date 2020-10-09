import React, { Component } from 'react';
import NavbarItem from './NavbarItem';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo_2.svg';

import navbar from '../../Data/navbar';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navOpen: false,
			isAuthenticated: false,
		};
		this.handleNavBtnClick = this.handleNavBtnClick.bind(this);
		this.navRef = React.createRef();
	}

	componentDidMount() {
		const idToken = window.localStorage.getItem('idToken');
		this.setState({
			isAuthenticated: idToken != null,
		});
	}

	componentDidUpdate() {
		if (this.state.navOpen) {
			setTimeout(() => {
				this.navRef.current.classList.add('navbar__nav--appear');
			}, 0);
		}
	}

	handleNavBtnClick() {
		this.setState({
			navOpen: !this.state.navOpen,
		});
	}

	render() {
		const { items } = navbar;
		const { navOpen, isAuthenticated } = this.state;
		return (
			<nav className='navbar'>
				<div
					className={`navbar__btn ${navOpen && 'open'}`}
					onClick={this.handleNavBtnClick}
				>
					<div className='navbar__btn--icon'></div>
				</div>
				<NavLink className='navbar__logoContainer' to='/'>
					<div className='navbar__imageContainer'>
						<Logo className='navbar__image' />
					</div>
					<h2 className='heading--2 heading--2-primary'>Pixel</h2>
				</NavLink>
				<ul
					className={`navbar__nav ${navOpen && 'navbar__nav--show'}`}
					ref={this.navRef}
				>
					{items.map((item) => (
						<NavbarItem
							name={item.name}
							link={item.link}
							key={item.name}
							isAuthenticated={isAuthenticated}
						/>
					))}
				</ul>
			</nav>
		);
	}
}

export default Navbar;
