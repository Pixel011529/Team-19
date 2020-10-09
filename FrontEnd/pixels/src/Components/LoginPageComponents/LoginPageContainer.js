import React, { Component } from 'react';
import axios from 'axios';

import loginImage from '../../assets/login.svg';

class LoginPageContainer extends Component {
	static defaultProps = {
		API_KEY: 'AIzaSyBGhmLw-CdofcYbs2QGGlBERez_pv2pYj0',
	};
	constructor(props) {
		super(props);
		this.state = {
			isSignUp: false,
			email: '',
			password: '',
			idToken: '',
			userId: '',
			error: '',
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.changeToSignUp = this.changeToSignUp.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	changeToSignUp() {
		this.setState({
			isSignUp: !this.state.isSignUp,
		});
	}

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		const authData = {
			email: this.state.email,
			password: this.state.password,
			returnSecureToken: true,
		};

		const { isSignUp } = this.state;
		let url;
		if (isSignUp) {
			url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.props.API_KEY}`;
		} else {
			url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.props.API_KEY}`;
		}
		axios.post(url, authData)
			.then((response) => {
				this.setState({
					idToken: response.data.idToken,
					userId: response.data.localId,
				});
				window.localStorage.setItem('idToken', response.data.idToken);
				setTimeout(() => {
					this.setState({
						idToken: null,
						userId: null,
					});
					window.localStorage.removeItem('idToken');
				}, response.data.expiresIn * 1000);
				this.props.history.push('/');
			})
			.catch((error) => {
				this.setState({
					error: error.response.data.error.message,
				});
			});
	}

	render() {
		const { isSignUp, email, password, error } = this.state;
		const action = isSignUp ? 'Sign Up' : 'Login';
		return (
			<div className='login'>
				<div className='login__formContainer'>
					<h1 className='heading--1 heading--1-dark contact__heading'>
						{action}
					</h1>
					<hr className='contact__underline'></hr>
					<form className='login__form' onSubmit={this.handleSubmit}>
						{error && (
							<h5 className='heading--5 heading--5-danger mb-2'>
								{error}
							</h5>
						)}
						<div className='contact__inputGroup'>
							<label className='contact__label' htmlFor='email'>
								Email
							</label>
							<input
								className='contact__input'
								type='email'
								placeholder='chandlerbing@gmail.com'
								id='email'
								value={email}
								name='email'
								onChange={this.handleInputChange}
							/>
							<p className='contact__hint'>
								Hint : chandlerbing@gmail.com
							</p>
						</div>
						<div className='contact__inputGroup'>
							<label className='contact__label' htmlFor='password'>
								Password
							</label>
							<input
								className='contact__input'
								type='password'
								placeholder='xyzpr@134'
								id='password'
								value={password}
								name='password'
								onChange={this.handleInputChange}
							/>
							<p className='contact__hint'>Hint : xyzpr@134</p>
						</div>
						<button className='login__formBtn btn header__content--btn header__content--btn_primary'>
							{action}
						</button>
					</form>
					<h4 className='heading--5 heading--5-dark'>
						{!isSignUp ? "Don't have an account ?" : 'Back To'}
						<span
							className='login__signUpBtn'
							onClick={this.changeToSignUp}
						>
							{!isSignUp ? 'Sign Up' : 'Login'}
						</span>
					</h4>
				</div>
				<div className='login__image'>
					<img className='login__image--img' src={loginImage} alt='Login' />
				</div>
			</div>
		);
	}
}

export default LoginPageContainer;
