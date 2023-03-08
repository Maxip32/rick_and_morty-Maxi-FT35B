import { ADD_FAVORITE, FILTER, ORDER } from "./action-types";
import { DELETE_FAVORITE } from "./action-types";


const initialState={
    allCharacters: [],
    myFavorites: []

}

const reducer= (state= initialState, action ) =>{

switch(action.type){

case ADD_FAVORITE: 
return{
    ...state,
    myFavorites:[...state.allCharacters, action.payload],
    allCharacters: [...state.allCharacters, action.payload]
}

case DELETE_FAVORITE:
    return{
        ...state,
        myFavorites: state.myFavorites.filter (char => char.id !== action.payload)
    }

    case FILTER:

    
    const allCharsFiltered= state.allCharacters.filter(char=> char.gender === action.payload);

    return{
      ...state,

      myFavorites: allCharsFiltered

    }

    case ORDER:
        return{
          ...state,
          myFavorites: 
          action.payload === "Ascendente"
          ?state.allCharacters.sort((a, b) => a.id - b.id):state.allCharacters.sort((a, b) => b.id - a.id)

        }




    
    default: return {...state}
}

}

export default reducer;