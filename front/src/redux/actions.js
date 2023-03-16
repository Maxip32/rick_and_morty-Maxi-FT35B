import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, GET_FAVS, ORDER, } from "./action-types";
import axios from "axios";

export const addFavorite=  (character)=>{
    return async (dispatch)=>{
try{

    const response =  await axios.post("http://localhost:3001/rickandmorty/favs", character)
    return dispatch({
        type: ADD_FAVORITE,
        payload: response.data
    })

}catch (error){
return dispatch({
    type: "ERROR",
    payload: error
})

}
        
        
    };

}

export const deleteFavorite= (id)=>{

    return async (dispatch)=>{
try {
    const response= await axios.delete(`http://localhost:3001/rickandmorty/favs/${id}`)
      return dispatch({
       type: DELETE_FAVORITE,
       payload: response.data,
      });
    }catch (error){
        return dispatch({
            type: "ERROR",
            payload: error
        })

   }




}


       

}

export const getFavorite= ()=>{

    return async (dispatch)=>{
try {
    const response= await axios.get(`http://localhost:3001/rickandmorty/favs`)
      return dispatch({
       type: GET_FAVS,
       payload: response.data,
      });
    }catch (error){
        return dispatch({
            type: "ERROR",
            payload: error
        })

   }
}
}


export const filterCards= (character)=>{
return {type: FILTER, payload: character}

}

export const orderCards= (id)=>{

    return {type: ORDER, payload: id}


}