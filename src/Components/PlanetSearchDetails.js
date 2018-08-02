import React from 'react';

class PlanetSearchDetails extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isSearchResultDisplayable: false
		}
	}

	render() {
		return (
			<div>
				<div className='row'>
					<div className='col-xs-12 col-lg-6 title'>
						<strong>Name: </strong>
					</div>

					<div className='col-xs-12 col-lg-6 info'>
						{this.props.planetDetails.name }
					</div>
						</div>
						<hr />

						<div className='row'>
							<div className='col-xs-12 col-lg-6 title'>
								<strong>Rotation Period: </strong>
							</div>

							<div className='col-xs-12 col-lg-6 info'>
								{this.props.planetDetails.rotation_period }
							</div>
						</div>
						<hr />

						<div className='row'>
							<div className='col-xs-12 col-lg-6 title'>
								<strong>Orbital Period: </strong>
							</div>

							<div className='col-xs-12 col-lg-6 info'>
								{this.props.planetDetails.orbital_period }
							</div>
						</div>
						<hr />

						<div className='row'>
							<div className='col-xs-12 col-lg-6 title'>
								<strong>Diameter: </strong>
							</div>

							<div className='col-xs-12 col-lg-6 info'>
								{this.props.planetDetails.diameter }kms
							</div>
						</div>
						<hr />

						<div className='row'>
							<div className='col-xs-12 col-lg-6 title'>
								<strong>Climate: </strong>
							</div>

							<div className='col-xs-12 col-lg-6 info'>
								Mostly {this.props.planetDetails.climate }
							</div>
						</div>
						<hr />

						<div className='row'>
							<div className='col-xs-12 col-lg-6 title'>
								<strong>Gravity: </strong>
							</div>

							<div className='col-xs-12 col-lg-6 info'>
								{this.props.planetDetails.gravity }
							</div>
						</div>
						<hr />

						<div className='row'>
							<div className='col-xs-12 col-lg-6 title'>
								<strong>Terrain: </strong>
							</div>

							<div className='col-xs-12 col-lg-6 info'>
								Mostly {this.props.planetDetails.terrain }
							</div>
						</div>
						<hr />

						<div className='row'>
							<div className='col-xs-12 col-lg-6 title'>
								<strong>Surface Water Density: </strong>
							</div>

							<div className='col-xs-12 col-lg-6 info'>
								{this.props.planetDetails.surface_water }
							</div>
						</div>
						<hr />

						<div className='row'>
							<div className='col-xs-12 col-lg-6 title'>
								<strong>Population: </strong>
							</div>

							<div className='col-xs-12 col-lg-6 info'>
								{this.props.planetDetails.population }
							</div>
						</div>
						<hr />
				</div>
		);
	}
}


export default PlanetSearchDetails;