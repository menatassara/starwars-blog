import React from "react";
import PropTypes from "prop-types";
import Card from "./card";

const VehicleCard = props => {
	return (
		<Card data={props.vehicle} type="vehicles" path={"/single/vehicles/" + props.vehicle.name}>
			<h5 className="card-title text-left">{props.vehicle.name}</h5>
			<p className="card-text text-left my-2">
				<b>Class: </b>
				{props.vehicle.vehicle_class} <br />
				<b>Model: </b>
				{props.vehicle.model} <br />
				<b>Manufacturer: </b>
				{props.vehicle.manufacturer} <br />
			</p>
		</Card>
	);
};

VehicleCard.propTypes = {
	vehicle: PropTypes.object
};

export default VehicleCard;
