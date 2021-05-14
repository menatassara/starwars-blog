import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let type = null;
	switch (params.type) {
		case "characters":
			type = store.characters;
			break;
		case "vehicles":
			type = store.vehicles;
			break;
		case "planets":
			type = store.planets;
			break;
		default:
			type = store.characters;
			break;
	}

	const RenderByType = objectData => {
		if (params.type == "characters") {
			return (
				<div className="row justify-content-between align-items-center w-100 ">
					<div>
						<p className="h3 text-warning">Gender</p>
						<p className="text-warning">{objectData.gender}</p>
					</div>
					<div>
						<p className="h3 text-warning">Hair Color</p>
						<p className="text-warning">{objectData.hair_color}</p>
					</div>
					<div>
						<p className="h3 text-warning">Height</p>
						<p className="text-warning">{objectData.height}</p>
					</div>
					<div>
						<p className="h3 text-warning">Eye Color</p>
						<p className="text-warning">{objectData.eye_color}</p>
					</div>
					<div>
						<p className="h3 text-warning">Mass</p>
						<p className="text-warning">{objectData.mass}</p>
					</div>
					<div>
						<p className="h3 text-warning">Birth Year</p>
						<p className="text-warning">{objectData.birth_year}</p>
					</div>
				</div>
			);
		} else if (params.type == "planets") {
			return (
				<div className="row justify-content-between align-items-center w-100 ">
					<div>
						<p className="h3 text-warning">Gravity</p>
						<p className="text-warning">{objectData.gravity}</p>
					</div>
					<div>
						<p className="h3 text-warning">Orbital Period</p>
						<p className="text-warning">{objectData.orbital_period}</p>
					</div>
					<div>
						<p className="h3 text-warning">Population</p>
						<p className="text-warning">{objectData.population}</p>
					</div>
					<div>
						<p className="h3 text-warning">Rotations Period</p>
						<p className="text-warning">{objectData.rotation_period}</p>
					</div>
					<div>
						<p className="h3 text-warning">Terrain</p>
						<p className="text-warning">{objectData.terrain}</p>
					</div>
					<div>
						<p className="h3 text-warning">Surface Water</p>
						<p className="text-warning">{objectData.surface_water}</p>
					</div>
				</div>
			);
		} else {
			return (
				<div className="row justify-content-between align-items-center w-100 ">
					<div>
						<p className="h3 text-warning">Consumable</p>
						<p className="text-warning">{objectData.consumables}</p>
					</div>
					<div>
						<p className="h3 text-warning">Cost in credits</p>
						<p className="text-warning">{objectData.cost_in_credits}</p>
					</div>
					<div>
						<p className="h3 text-warning">Manufacturer</p>
						<p className="text-warning">{objectData.manufacturer}</p>
					</div>
					<div>
						<p className="h3 text-warning">Model</p>
						<p className="text-warning">{objectData.model}</p>
					</div>
					<div>
						<p className="h3 text-warning">Passengers</p>
						<p className="text-warning">{objectData.passengers}</p>
					</div>
					<div>
						<p className="h3 text-warning">Vehicle Class</p>
						<p className="text-warning">{objectData.vehicle_class}</p>
					</div>
				</div>
			);
		}
	};

	const RenderDetails = () => {
		const objectData = type.find(object => object.name == params.name);

		if (type.length > 0) {
			return (
				<div className="container">
					<div className="d-flex w-100 h1 text-warning justify-content-around align-items-center">
						<span className="text-capitalize">{params.type}</span>
						<span>{objectData.name}</span>
					</div>
					<hr className="my-3" style={{ borderColor: "white" }} />
					<div className="row">
						<div className="col-sm-12 col-md-6">
							<img
								width="100%"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSryam1PRHJHHTl8xBxtfd3hPiMonVa5WO3PCZcoa1MS-TK3-d7ux1RwNW-D1KT6EDUtrc&usqp=CAU"
								className="img-fluid"
							/>
						</div>
						<div className="col-sm-12 col-md-6">
							<p className="text-justify ma-0 text-white">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem autem rerum sed facere
								maxime, quia totam earum eius ipsam laboriosam repudiandae consequatur aperiam
								consectetur dolore, fugit in distinctio. Odio, libero.Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Quidem autem rerum sed facere maxime, quia totam earum
								eius ipsam laboriosam repudiandae consequatur aperiam consectetur dolore, fugit in
								distinctio. Odio, libero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
								autem rerum sed facere maxime, quia totam earum eius ipsam laboriosam repudiandae
								consequatur aperiam consectetur dolore, fugit in distinctio. Odio, libero. Lorem ipsum
								dolor sit amet consectetur adipisicing elit. Quidem autem rerum sed facere maxime, quia
								totam earum eius ipsam laboriosam repudiandae consequatur aperiam consectetur dolore,
								fugit in distinctio. Odio, libero.
							</p>
						</div>
					</div>
					{RenderByType(objectData)}
				</div>
			);
		} else {
			return (
				<div>
					<h1 className="text-center">Cargando</h1>
				</div>
			);
		}
	};

	return (
		<div className="container">
			<RenderDetails />
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
