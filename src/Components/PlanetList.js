import React from 'react';
import { reduceSize } from '../helper/Utility';
import '../ComponentStyles/PlanetList.css';
import PlanetSearchDetails from './PlanetSearchDetails';

class PlanetList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isSearchResultDisplayable: false
		}
	}

	handleClickOfPlanet(planetDetails) {
		const { isSearchResultDisplayable } =this.state 
		console.log( planetDetails )

		this.setState({
			isSearchResultDisplayable: !this.state.isSearchResultDisplayable
		});
	}

	handleCloseDetails() {
		this.setState({
			isSearchResultDisplayable: false
		});
	}


	render() {

		const sizeOfPlanet =  reduceSize(this.props.planetDetails.population) 
		return (
			<div style={{ display: 'inline-block', position: 'relative' }}>
				<div style={ sizeOfPlanet } 
				onClick={ this.handleClickOfPlanet.bind( this, this.props.index ) } 
				className='planets'>
				
					<div className='title'>
						{ this.props.planetDetails.name}
					</div>
				</div>


				{ this.state.isSearchResultDisplayable && 

				<div className='planet-search-results' 
					style={{ display: this.state.isSearchResultDisplayable }}>
					<h1>Search Results</h1>

					<PlanetSearchDetails planetDetails={ this.props.planetDetails } />

					<button className='btn btn-sm btn-warning' 
						onClick={ this.handleCloseDetails.bind(this) }>
						Close
					</button>


				</div>}
			</div>
		);
	}
}


export default PlanetList;