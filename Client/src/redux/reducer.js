import {
	ADD_FAV,
	REMOVE_FAV,
	FILTER_CARDS,
	ORDER_CARDS,
	GET_FAV,
} from "./action-types";
//!----------------------------------------------------+/

const initialState = {
	myFavourites: [],
	allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_FAV:
			return {
				...state,
				myFavourites: payload,
				allCharacters: payload,
			};
		case REMOVE_FAV:
			return {
				...state,
				myFavourites: payload,
			};
		case FILTER_CARDS:
			if (payload === "All")
				return {
					...state,
					myFavourites: state.allCharacters,
				};
			return {
				...state,
				myFavourites: state.allCharacters.filter(
					(character) => character.gender === payload
				),
			};
		case ORDER_CARDS:
			return {
				...state,
				myFavourites: state.allCharacters.sort((a, b) => {
					if (payload === "A") return a.id - b.id;
					if (payload === "D") return b.id - a.id;
				}),
			};
		case GET_FAV:
			return {
				...state,
				myFavourites: payload,
				allCharacters: payload,
			};
		default:
			return { ...state };
	}
};

export default rootReducer;
