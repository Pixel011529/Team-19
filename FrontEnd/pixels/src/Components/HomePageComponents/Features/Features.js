import React, { Component } from 'react';
import FeatureBox from './FeatureBox';

class Features extends Component {
	render() {
		const { features } = this.props;
		return (
			<div className='features__container'>
				<h1 className='features__heading heading--1 heading--1-dark'>
					Why Pixel ?
				</h1>
				<section className='features'>
					{features.map((featureBox) => (
						<FeatureBox {...featureBox} key={featureBox.icon} />
					))}
				</section>
			</div>
		);
	}
}

export default Features;
