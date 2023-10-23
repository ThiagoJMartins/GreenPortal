import { ADD_FAV, REMOVE_FAV } from "./action-types";

const initialState = {
    myFavourites: [],
}

const rootReducer = (state=initialState, {type, payload}) => {
    switch (type){
        case ADD_FAV:
            return {
                ... state,
                myFavourites: [...state.myFavourites, payload]
            }
        case REMOVE_FAV:
            let favourites = state.myFavourites.filter((favourite) => {
                return favourite.id !== parseInt(payload)
            })

            return {
                ...state,
                myFavourites: favourites
            }
        default:
            return { ...state };
    }
}

export default rootReducer;