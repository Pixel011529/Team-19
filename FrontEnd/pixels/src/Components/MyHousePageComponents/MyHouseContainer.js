import React, { Component } from 'react';

import MyHouseDetails from './MyHouseDetails';

import axios from 'axios';

import secure from '../../assets/secure.svg';
import danger from '../../assets/danger.svg';

class MyHouseContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: null,
			isSecure: 'True',
			address: 'No 2, Manhattan,Central Perk, NY',
			numIntruders: '',
			floor: '',
			room: '',
			numWeapons: '',
			monitoring: true,
		};
		this.parseImage = this.parseImage.bind(this);
        this.handleMonitoring = this.handleMonitoring.bind(this);
        this.handleReset = this.handleReset.bind(this);
	}
	componentDidMount() {
		const idToken = window.localStorage.getItem('idToken');
		axios.get(`https://hackathon-94220.firebaseio.com/Images.json?auth=${idToken}`)
			.then((response) => {
                if(response.data != null) {
                    this.setState({
                        images: this.parseImage(response.data.slice(1)),
                    });
                }
			})
			.catch((error) => {
				console.log(error);
			});

		axios.get(`https://hackathon-94220.firebaseio.com/Details.json?auth=${idToken}`)
			.then((response) => {
                if(response.data != null) {
                    const data = response.data;
                    this.setState({
                        isSecure: data.IsSecure,
                        numIntruders: data.NoOfIntruders,
                        floor: data.FloorNo,
                        room: data.RoomNo,
                        numWeapons: data.NoOfWeapons,
                    });
                }
			})
			.catch((error) => {
				console.log(error);
            });
            
        axios.get(`https://hackathon-94220.firebaseio.com/Monitoring.json`)
            .then(response => {
                this.setState({
                    monitoring:response.data.toMonitor
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
    
	componentDidUpdate() {
		const idToken = window.localStorage.getItem('idToken');
		axios.get(`https://hackathon-94220.firebaseio.com/Images.json?auth=${idToken}`)
			.then((response) => {
                if(response.data != null) {
                    this.setState({
                        images: this.parseImage(response.data.slice(1)),
                    });
                }
			})
			.catch((error) => {
				console.log(error);
			});

		axios.get(`https://hackathon-94220.firebaseio.com/Details.json?auth=${idToken}`)
			.then((response) => {
                if(response.data != null) {
                    const data = response.data;
                    this.setState({
                        isSecure: data.IsSecure,
                        numIntruders: data.NoOfIntruders,
                        floor: data.FloorNo,
                        room: data.RoomNo,
                        numWeapons: data.NoOfWeapons,
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
        axios.delete(`https://hackathon-94220.firebaseio.com/Details.json?auth=${idToken}`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
        axios.delete(`https://hackathon-94220.firebaseio.com/Images.json?auth=${idToken}`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

	render() {
		const {
			images,
			numIntruders,
			floor,
			room,
			numWeapons,
			isSecure,
			address,
			monitoring,
		} = this.state;
		const toRender = isSecure === 'False' && monitoring;
		return (
			<div className='myHouse'>
				<div className='myHouse__status'>
					<h1 className='heading--1 heading--1-dark'>
						{!toRender
							? 'Your House Is Safe'
							: 'Your House Is Under Attack'}
					</h1>
					<img
						className='myHouse__statusImage'
						src={!toRender ? secure : danger}
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
				{toRender && (
					<div className='myHouse__details'>
						<MyHouseDetails
							detail={`${numIntruders} intruders`}
							icon='robbery'
						/>
						<MyHouseDetails detail={`Floor : ${floor}`} icon='step' />
						<MyHouseDetails detail={`Room : ${room}`} icon='exit' />
						<MyHouseDetails detail={address} icon='google-maps' />
						<MyHouseDetails
							detail={`${numWeapons} Weapons`}
							icon='assault-rifle
'
						/>
					</div>
				)}
				{toRender && (
					<div className='myHouse__images'>
						{images &&
							images.map((image, index) => (
								<img
									key={index}
									className='myHouse__images--img'
									alt='robbery'
									src={`data:image/jpg;base64,${image}`}
								/>
							))}
					</div>
				)}
				{toRender && (
					<div className='myHouse__blueprint'>
						<h2 className='heading--2 heading--2-dark'>Blueprint</h2>
						<h3>BluePrint Image</h3>
					</div>
				)}
			</div>
		);
	}
}

export default MyHouseContainer;
