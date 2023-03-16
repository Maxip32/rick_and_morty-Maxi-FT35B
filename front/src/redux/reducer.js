import { ADD_FAVORITE, FILTER, GET_FAVS, ORDER } from "./action-types";
import { DELETE_FAVORITE } from "./action-types";


const initialState={
    allCharacters: [],
    myFavorites: []

}

 export default function reducer(state= initialState, {type, payload} ){

switch(type){

case ADD_FAVORITE: 
return{
    ...state,
    myFavorites: payload,
    //allCharacters: payload,
};



case DELETE_FAVORITE:
    return{
        ...state,
        myFavorites: payload,
    }

    case FILTER:

    
    const allCharsFiltered= [...state.allCharacters]
    const filter= allCharsFiltered.filter((ch)=> ch.gender === payload );
    return{
      ...state,

      myFavorites: filter,

    }

    case ORDER:
        return{
          ...state,
          myFavorites: 
          payload === "Ascendente"
          ?state.allCharacters.sort((a, b) => a.id - b.id):state.allCharacters.sort((a, b) => b.id - a.id)

        }
        default: return {...state}


case GET_FAVS:
    return{
        ...state,
        myFavorites: payload,
    }

    
}

}

