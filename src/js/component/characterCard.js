import React from "react";
import PropTypes from "prop-types";
import Card from "./card";

const CharacterCard = props => {
	return (
		<Card data={props.character} type="characters" path={"/single/characters/" + props.character.name}>
			<h5 className="card-title text-left">{props.character.name}</h5>
			<p className="card-text text-left my-2">
				<b>Gender: </b>
				{props.character.gender} <br />
				<b>Hair Color: </b>
				{props.character.hair_color} <br />
				<b>Eye Color: </b>
				{props.character.eye_color} <br />
			</p>
		</Card>
	);
};

// Tipo de props
CharacterCard.propTypes = {
	character: PropTypes.object
};

export default CharacterCard;
