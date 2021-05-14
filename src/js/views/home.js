import "../../styles/character.scss";

import React, { useContext } from "react";
import CharacterCard from "../component/characterCard";
import PlanetCard from "../component/planetCard";
import VehicleCard from "../component/vehicleCard";

import { Context } from "../store/appContext";

const Home = () => {
	const { store, actions } = useContext(Context);

	// Renderiza los personajes
	const RenderCharacters = props => {
		const listCharacters = store.characters.map((character, index) => {
			return (
				<div className="col-sm-12 col-md-6 col-lg-4" key={index}>
					<CharacterCard character={character} />
				</div>
			);
		});
		return <div className="row flex-nowrap">{listCharacters}</div>;
	};

	// Renderiza los planetas
	const RenderPlanets = props => {
		const listPlanets = store.planets.map((planet, index) => {
			return (
				<div className="col-sm-12 col-md-6 col-lg-4" key={index}>
					<PlanetCard planet={planet} />
				</div>
			);
		});
		return <div className="row flex-nowrap">{listPlanets}</div>;
	};

	// Renderiza los vehiculos
	const RenderVehicles = props => {
		const listVehicles = store.vehicles.map((vehicle, index) => {
			return (
				<div className="col-sm-12 col-md-6 col-lg-4" key={index}>
					<VehicleCard vehicle={vehicle} />
				</div>
			);
		});
		return <div className="row flex-nowrap">{listVehicles}</div>;
	};

	const RenderByType = data => {
		if (data.type == "characters") {
			return <CharacterCard character={data} />;
		} else if (data.type == "planets") {
			return <PlanetCard planet={data} />;
		} else {
			return <VehicleCard vehicle={data} />;
		}
	};

	const RenderReadLater = props => {
		if (store.readLater.length > 0) {
			const readLaterList = store.readLater.map((read, index) => {
				return (
					<div className="col-sm-12 col-md-6 col-lg-4" key={index}>
						{RenderByType(read)}
					</div>
				);
			});
			return <div className="row flex-nowrap">{readLaterList}</div>;
		} else {
			return (
				<div className="row flex-nowrap justify-content-center">
					<h3 className="text-warning text-center">Empty</h3>
				</div>
			);
		}
	};

	return (
		<div className="text-center mt-5">
			<div className="container">
				<div className="scroll">
					<h1 className="my-3">Characters</h1>
					<RenderCharacters />
					<h1 className="my-3">Planets</h1>
					<RenderPlanets />
					<h1 className="my-3">Vehicles</h1>
					<RenderVehicles />
					<h1 className="my-3">Read Later</h1>
					<RenderReadLater />
				</div>
			</div>
		</div>
	);
};

export default Home;
