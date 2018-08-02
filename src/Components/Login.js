import React from 'react';
import '../ComponentStyles/Login.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Search from './Search';

class Login extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoginSuccess: false,
			username: '',
			password: '',
		}
	}

	handleOnChange() {
		const { results , username, password } = this.state
		this.setState({
			username: this.refs.username.value,
			password: this.refs.password.value
		});
	}


	handleFormSubmit(event) {
		const { results , username, password } = this.state
		const BASEURL= 'https://swapi.co/api/people'

		event.preventDefault()
		
		this.fetchDatafromAPI( this.state.username, this.state.password , BASEURL )
	}


	fetchDatafromAPI( username, password , url ) {
		const { isLoginSuccess , isError } = this.state
		let self = this

		if( username && password ) {
			axios.get(`${ url }`,  {
				params: {
					search: username
				}
			})
			.then(function (response) {
        let resData = response.data;
        if (resData && resData.results && resData.results.length > 0) {
          let user = resData.results[0];
          if (user.name === username && user.birth_year === password) {
          		self.setState({
          			isLoginSuccess: true
          		})
          	return
          }
          else{
          	self.setState({
		      		isError: 'Either username or password is incorrect'
		      	})
          }
        }
	    })
		  .catch(function (error) {
		    console.log(error);
		  })

		}

		else{
			this.setState({
				isError: `Username or Password can't be empty'` 
			});
		}
	}




	render() {
		return (
			<div className='container-fluid Login'>
				<div className='LoginWrapper col-xs-12 col-md-4 offset-md-4'>
					<h1>Login</h1>

					<form className='form-group text-left' 
							onSubmit={ this.handleFormSubmit.bind(this) } >

						<label><i><small>Enter UserName</small></i></label>
						<input className='form-control'
							placeholder='e.g Luke Wright etc.'
							ref='username'
							type='text'
							onChange={ this.handleOnChange.bind( this )}
							/>
						<hr />

						<label><i><small>Enter Password</small></i></label>
						<input className='form-control'
							placeholder='******'
							ref='password'
							type='password'
							onChange={ this.handleOnChange.bind( this )}
							/>
						<br />
						<hr />
						<br />

						<button className='btn btn-primary'>Login</button>
						{ this.state.isLoginSuccess && <Redirect to='/search' />}
					</form>
				</div>
			</div>
		);
	}
}


export default Login;