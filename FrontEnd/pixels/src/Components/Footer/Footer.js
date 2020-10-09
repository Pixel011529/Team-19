import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import social_media from '../../assets/social_sprite.svg';

class Footer extends Component {
	render() {
		return (
			<footer className='footer'>
				<h2 className='heading--2 heading--2-light'>Pixel</h2>
				<ul className='footer__list'>
					<NavLink exact to='/' className='footer__list--item'>
						Home
					</NavLink>
					<NavLink exact to='/contact/faq' className='footer__list--item'>
						Contact Us
					</NavLink>
					<NavLink exact to='/privacyPolicy' className='footer__list--item'>
						Privacy Policy
					</NavLink>
				</ul>
				<div className='footer__socialMedia'>
					<a
						href='https://www.facebook.com/electrofocus.in/'
						className='footer__socialMedia_icon'
					>
						<svg className='footer__socialMedia_icon-fb'>
							<use xlinkHref={`${social_media}#facebook`} />
						</svg>
					</a>
					<a
						href='https://www.instagram.com/eea.mit/?hl=en'
						className='footer__socialMedia_icon'
					>
						<svg className='footer__socialMedia_icon-insta'>
							<use xlinkHref={`${social_media}#instagram`} />
						</svg>
					</a>
				</div>
				<p className='footer__copyright'>
					&copy; Copyright 2020, Pixel Inc. All Rights Reserved.
				</p>
			</footer>
		);
	}
}

export default Footer;
