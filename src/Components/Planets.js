import React from 'react';
import PlanetList from './PlanetList';

class Planets extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		debugger
		return (
			<div>
				{
					this.props.planetDetails && this.state.planetDetails.map( (item, index ) => {
						return <PlanetList planetDetails={ item } key={ index } index={ index }/>
					})
				}
			</div>
		);
	}
}


export default Planets;