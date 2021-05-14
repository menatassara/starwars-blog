import React from "react";
import PropTypes from "prop-types";
import Card from "./card";

const PlanetCard = props => {
	return (
		<Card data={props.planet} type="planets" path={"/single/planets/" + props.planet.name}>
			<h5 className="card-title text-left">{props.planet.name}</h5>
			<p className="card-text text-left my-2">
				<b>Terrain: </b>
				{props.planet.terrain} <br />
				<b>Population: </b>
				{props.planet.population} <br />
				<b>Climate: </b>
				{props.planet.climate} <br />
			</p>
		</Card>
	);
};

// Tipo de props
PlanetCard.propTypes = {
	planet: PropTypes.object
};

export default PlanetCard;
