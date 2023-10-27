import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS } from "./action-types";

const initialState = {
    myFavourites: [],
    allCharacters: []
}

const rootReducer = (state=initialState, {type, payload}) => {
    switch (type){
        case ADD_FAV:
            return {
                ... state,
                myFavourites: [...state.myFavourites, payload],
                allCharacters: [...state.allCharacters, payload]
            }
        case REMOVE_FAV:
            let favourites = state.myFavourites.filter((favourite) => {
                return favourite.id !== parseInt(payload)
            })

            return {
                ...state,
                myFavourites: favourites
            }
        case FILTER_CARDS:
            if (payload === 'All') return {
                ...state,
                myFavourites: state.allCharacters
            }
            return{
                ...state,
                myFavourites: state.allCharacters.filter((character) => character.gender === payload)
            }
        case ORDER_CARDS:
            return{
                ...state,
                myFavourites: state.allCharacters.sort((a,b) => {
                    if (payload === 'A') return a.id - b.id;
                    if (payload === 'D') return b.id - a.id;
                })
            }
        default:
            return { ...state };
    }
}

export default rootReducer;