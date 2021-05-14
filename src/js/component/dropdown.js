import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Dropdown = props => {
	// Store desde app context
	const { store, actions } = useContext(Context);

	const RenderFavorites = () => {
		if (store.favorites.length > 0) {
			const favorites = (store.favorites || []).map((favorite, index) => {
				return (
					<div className="dropdown-item" key={index}>
						<div className="d-flex justify-content-between align-items-center">
							{favorite.name}
							<button className="ml-3 btn btn-light" onClick={() => actions.removeFromFavs(favorite)}>
								<i className="fas fa-trash text-error float-right" />
							</button>
						</div>
					</div>
				);
			});

			return <div className="dropdown-menu">{favorites}</div>;
		} else {
			return (
				<div className="dropdown-menu">
					<div className="dropdown-item">Empty Favs</div>
				</div>
			);
		}
	};

	return (
		<div className="btn-group">
			<button
				type="button"
				className="btn btn-warning dropdown-toggle"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Favorites
				<span className="ml-2 badge bg-secondary">{store.favorites.length}</span>
			</button>
			{RenderFavorites()}
		</div>
	);
};

export default Dropdown;
