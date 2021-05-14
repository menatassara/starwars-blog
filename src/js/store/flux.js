const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			planets: [],
			characters: [],
			vehicles: [],
			readLater: []
		},
		actions: {
			// Add item character or planet to favs
			addToFavs: item => {
				const store = getStore();
				const favorites = store.favorites;
				favorites.unshift(item);
				setStore({ favorites: favorites });
			},
			// Remove item character or planet from favs
			removeFromFavs: itemFav => {
				const store = getStore();
				const favorites = store.favorites;
				const removeIndex = (favorites || [])
					.map(function(item) {
						return item.name;
					})
					.indexOf(itemFav.name);
				favorites.splice(removeIndex, 1);
				setStore({ favorites: favorites });
			},
			addReadLater: item => {
				const store = getStore();
				const readLater = store.readLater;
				if (!readLater.includes(item)) {
					readLater.unshift(item);
					setStore({ readLater: readLater });
				}
			},
			fetchPlanets() {
				//Datos de los planetas
				fetch("https://swapi.dev/api/planets/?limit=10")
					.then(response => response.json())
					.then(data => setStore({ planets: data.results }));
			},
			fetchVehicles() {
				//Datos de los vehiculos
				fetch("https://swapi.dev/api/vehicles/?limit=10")
					.then(response => response.json())
					.then(data => setStore({ vehicles: data.results }));
			},
			fetchCharacters() {
				//Datos de los personajes
				fetch("https://swapi.dev/api/people/?limit=10")
					.then(response => response.json())
					.then(data =>
						setStore({
							characters: data.results
						})
					);
			}
		}
	};
};

export default getState;
