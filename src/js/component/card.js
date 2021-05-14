import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = props => {
	const { store, actions } = useContext(Context);

	const addToReadLater = () => {
		const data = Object.assign(props.data, { type: props.type });
		actions.addReadLater(data);
	};

	const addToFavs = () => {
		if (!store.favorites.includes(props.data)) {
			actions.addToFavs(props.data);
		} else {
			actions.removeFromFavs(props.data);
		}
	};

	const renderIconRead = () => {
		return !store.readLater.includes(props.data) ? "far fa-bookmark" : "fas fa-bookmark";
	};

	const renderIconFav = () => {
		return !store.favorites.includes(props.data) ? "far fa-heart" : "fas fa-heart";
	};

	return (
		<div className="card my-2 outlined rounded-0">
			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSryam1PRHJHHTl8xBxtfd3hPiMonVa5WO3PCZcoa1MS-TK3-d7ux1RwNW-D1KT6EDUtrc&usqp=CAU"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				{props.children}

				<Link to={props.path}>
					<button className="btn btn-primary text-white float-left">Learn more!</button>
				</Link>
				<button onClick={addToFavs} className="btn btn-warning mx-2 float-right">
					<i className={renderIconFav()} />
				</button>
				<button onClick={addToReadLater} className="btn btn-success float-right">
					<i className={renderIconRead()} />
				</button>
			</div>
		</div>
	);
};

Card.propTypes = {
	children: PropTypes.any,
	data: PropTypes.object,
	path: PropTypes.string,
	type: PropTypes.string
};

export default Card;
