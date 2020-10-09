import React, { Component } from 'react';

import MyHouseDetails from './MyHouseDetails';

import axios from 'axios';

import secure from '../../assets/secure.svg';
import danger from '../../assets/danger.svg';
import blueprint from '../../assets/floorPlan.png';

class MyHouseContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			roomOneImages: null,
			roomOneisSecure: 'True',
			roomOnenumIntruders: '',
			roomOnefloor: '',
			roomOneroom: '',
			roomOnenumWeapons: '',
			address: 'No 2, Manhattan,Central Perk, NY',
			monitoring: true,
			roomTwoImages: null,
			roomTwoisSecure: 'True',
			roomTwonumIntruders: '',
			roomTwofloor: '',
			roomTworoom: '',
			roomTwonumWeapons: '',
		};
		this.parseImage = this.parseImage.bind(this);
        this.handleMonitoring = this.handleMonitoring.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.getRoomOneDetails = this.getRoomOneDetails.bind(this);
        this.getRoomTwoDetails = this.getRoomTwoDetails.bind(this);
    }

    componentDidMount() {
		this.getRoomOneDetails();
		this.getRoomTwoDetails();
    }
    
	componentDidUpdate() {
        this.getRoomOneDetails();
        this.getRoomTwoDetails();
	}
    
    getRoomOneDetails() {
        const idToken = window.localStorage.getItem('idToken');
		axios.get(`https://hackathon-pixel.firebaseio.com/RoomOne.json?auth=${idToken}`)
			.then((response) => {
                if(response.data != null) {
                    this.setState({
                        roomOneImages: this.parseImage(response.data.slice(1)),
                    });
                }
			})
			.catch((error) => {
				console.log(error);
			});

		axios.get(`https://hackathon-pixel.firebaseio.com/DetailsOne.json?auth=${idToken}`)
			.then((response) => {
                if(response.data != null) {
                    const data = response.data;
                    this.setState({
                        roomOneisSecure: data.IsSecure,
                        roomOnenumIntruders: data.NoOfIntruders,
                        roomOnefloor: data.FloorNo,
                        roomOneroom: data.RoomNo,
                        roomOnenumWeapons: data.NoOfWeapons,
                    });
                }
			})
			.catch((error) => {
				console.log(error);
            });
    }

    getRoomTwoDetails() {
        const idToken = window.localStorage.getItem('idToken');
		axios.get(`https://hackathon-pixel.firebaseio.com/RoomTwo.json?auth=${idToken}`)
			.then((response) => {
                if(response.data != null) {
                    this.setState({
                        roomTwoImages: this.parseImage(response.data.slice(1)),
                    });
                }
			})
			.catch((error) => {
				console.log(error);
			});

		axios.get(`https://hackathon-pixel.firebaseio.com/DetailsTwo.json?auth=${idToken}`)
			.then((response) => {
                if(response.data != null) {
                    const data = response.data;
                    this.setState({
                        roomTwoisSecure: data.IsSecure,
                        roomTwonumIntruders: data.NoOfIntruders,
                        roomTwofloor: data.FloorNo,
                        roomTworoom: data.RoomNo,
                        roomTwonumWeapons: data.NoOfWeapons,
                    });
                }
			})
			.catch((error) => {
				console.log(error);
            });
    }

	parseImage(images) {
		let parsedImages = [];
		parsedImages = images.map((image) => image.slice(2, image.length - 1));
		return parsedImages.slice(parsedImages.length - 6, parsedImages.length);
	}

	handleMonitoring() {
		this.setState({
			monitoring: !this.state.monitoring,
        });
    }
    
    handleReset() {
        const idToken = window.localStorage.getItem('idToken');
        axios.delete(`https://hackathon-pixel.firebaseio.com/Details.json?auth=${idToken}`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
        axios.delete(`https://hackathon-pixel.firebaseio.com/RoomOne.json?auth=${idToken}`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

	render() {
		const {
			roomOneImages,
			roomOnenumIntruders,
			roomOnefloor,
			roomOneroom,
			roomOnenumWeapons,
			roomOneisSecure,
			roomTwoImages,
			roomTwonumIntruders,
			roomTwofloor,
			roomTworoom,
			roomTwonumWeapons,
			roomTwoisSecure,
			address,
			monitoring,
		} = this.state;
		const toRenderOne = roomOneisSecure === 'False' && monitoring;
		const toRenderTwo = roomTwoisSecure === 'False' && monitoring;
		return (
			<div className='myHouse'>
				<div className='myHouse__status'>
					<h1 className='heading--1 heading--1-dark'>
						{!toRenderOne && !toRenderTwo
							? 'Your House Is Safe'
							: 'Your House Is Under Attack'}
					</h1>
					<img
						className='myHouse__statusImage'
						src={!toRenderOne && !toRenderTwo ? secure : danger}
						alt='House status'
					/>
				</div>
				<div className='myHouse__control'>
					<button
						className='btn header__content--btn header__content--btn_primary'
						onClick={this.handleMonitoring}
					>
						{monitoring ? 'Turn Off Monitoring' : 'Turn On Monitoring'}
					</button>
					<button
						className='btn header__content--btn header__content--btn_primary'
						onClick={this.handleReset}
					>
						Reset
					</button>
				</div>
                <h2 className='heading--2 heading--2-dark'>Room No : {roomOneroom}</h2>
				{toRenderTwo && (
					<div className='myHouse__details'>
						<MyHouseDetails
							detail={`${roomOnenumIntruders} intruders`}
							icon='robbery'
						/>
						<MyHouseDetails detail={`Floor : ${roomOnefloor}`} icon='step' />
						<MyHouseDetails detail={`Room : ${roomOneroom}`} icon='exit' />
						<MyHouseDetails detail={address} icon='google-maps' />
						<MyHouseDetails
							detail={`${roomOnenumWeapons} Weapons`}
							icon='assault-rifle
'
						/>
					</div>
				)}
				{toRenderTwo && (
					<div className='myHouse__images'>
						{roomTwoImages &&
							roomTwoImages.map((image, index) => (
								<img
									key={index}
									className='myHouse__images--img'
									alt='robbery'
									src={`data:image/jpg;base64,${image}`}
								/>
							))}
					</div>
				)}
                <hr className='contact__underline'></hr>
                <h2 className='heading--2 heading--2-dark'>Room No : {roomTworoom}</h2>
				{toRenderTwo && (
					<div className='myHouse__details'>
						<MyHouseDetails
							detail={`${roomTwonumIntruders} intruders`}
							icon='robbery'
						/>
						<MyHouseDetails detail={`Floor : ${roomTwofloor}`} icon='step' />
						<MyHouseDetails detail={`Room : ${roomTworoom}`} icon='exit' />
						<MyHouseDetails detail={address} icon='google-maps' />
						<MyHouseDetails
							detail={`${roomTwonumWeapons} Weapons`}
							icon='assault-rifle
'
						/>
					</div>
				)}
				{toRenderOne && (
					<div className='myHouse__images'>
						{roomOneImages &&
							roomOneImages.map((image, index) => (
								<img
									key={index}
									className='myHouse__images--img'
									alt='robbery'
									src={`data:image/jpg;base64,${image}`}
								/>
							))}
					</div>
				)}
				{toRenderOne && toRenderTwo && (
					<div className='myHouse__blueprint'>
						<h2 className='heading--2 heading--2-dark'>Blueprint</h2>
						<img
                            className='myHouse__blueprintImage'
                            alt='robbery'
                            src={blueprint}
                        />
					</div>
				)}
			</div>
		);
	}
}

export default MyHouseContainer;
