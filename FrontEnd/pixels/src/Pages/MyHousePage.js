import React, { Component } from 'react';

import MyHouseContainer from '../Components/MyHousePageComponents/MyHouseContainer';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

import { myHousePageHeader } from '../Data/header';

class MyHousePage extends Component {
	render() {
		return (
			<div className='container container--myHouse'>
				<Header {...myHousePageHeader} />
				<MyHouseContainer />
				<Footer />
			</div>
		);
	}
}

export default MyHousePage;
