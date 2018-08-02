import React from 'react';
import axios from 'axios';
import PlanetList from './PlanetList';
import '../ComponentStyles/Search.css';


class Search extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			planets: []
		}
	}

	componentDidMount() {
		const { planets } = this.state 
		const BASE_URL = 'https://swapi.co/api/planets/'
		let self = this;
		axios.get( `${ BASE_URL }` )
		.then(function (response) {
        let resData = response.data;
        self.setState({
        	planets: resData 
        });
	    })
	  .catch(function (error) {
	    console.log(error);
	  })
	  console.log( this.state.planets )
	}


	handleSearchChange(event) {
		const { planets } = this.state 
		const planetname = event.target.value
		const BASE_URL = 'https://swapi.co/api/planets/'
		let self = this;
		axios.get( `${ BASE_URL }` , {
			params: {
				search: planetname
			}
		}).then( response =>  {
      this.setState({
      	planets: response.data.results 
      });

			console.log( this.state.planets )
		})
	}



	render() {
		return (
			<div className='container-fluid universe'>
				<h1>Search</h1>

				<div className='col-xs-12 col-md-6 offset-md-3'> 
					<input className='form-control' 
						placeholder='Search for planets...' 
						onChange={ this.handleSearchChange.bind(this) } 
				/>


				</div>

				{ this.state.planets && <div className='fetching'>Fetching Data</div> }

				{ typeof this.state.planets.results === 'undefined' ? 
					<div>
						{ this.state.planets.map( (item, index) => {
							return <PlanetList planetDetails={ item } key={ index } />
						})}
					</div>: <div>
						{ this.state.planets.results.map( (item, index) => {
							return <PlanetList planetDetails={ item } key={ index }/>
						})}
					</div> 
				}

			</div>
		);
	}
}

export default Search;