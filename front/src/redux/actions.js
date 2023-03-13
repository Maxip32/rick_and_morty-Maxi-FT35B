import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER, } from "./action-types";
import axios from "axios";
export const addFavorite=  (character)=>{
    return async (dispatch)=>{

      return  await axios.post("http://localhost:3001/fav", character)
      .then(res=> dispatch({type:ADD_FAVORITE, payload: res.data}))
        
        
    }

}

export const deleteFavorite= (id)=>{

    return async (dispatch)=>{

        axios.delete(`http://localhost:3001/fav/${id}`);
        return dispatch ({type: DELETE_FAVORITE, payload: id})
    }

}

export const filterCards= (gender)=>{
return {type: FILTER, payload: gender}

}

export const orderCards= (id)=>{

    return {type: ORDER, payload: id}


}