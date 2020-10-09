import React, { Component } from 'react';
import myHouseSprite from '../../assets/myHouseSprite.svg';

class MyHouseDetails extends Component {
	render() {
		const { detail, icon } = this.props;
		return (
			<div className='myHouse__singleDetail'>
				<svg className='myHouse__detailsSvg'>
					<use xlinkHref={`${myHouseSprite}#${icon}`} />
				</svg>
				<h5 className='myHouse__detail'>{detail}</h5>
			</div>
		);
	}
}

export default MyHouseDetails;
