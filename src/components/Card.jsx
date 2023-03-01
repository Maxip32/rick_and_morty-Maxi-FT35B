import "./card.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addFavorite, deleteFavorite } from "../redux/actions";
import { useEffect } from "react";


export default function Card({id, name, gender, onClose, species, image}) {
   
   const dispatch= useDispatch();
   const myFavorites= useSelector(state=> state.myFavorites);
   const [isFav, setIsFav]= useState(false);

   const handleFavorite= ()=>{
if(isFav){
   setIsFav(false);
   dispatch(deleteFavorite(id))
}else{

   setIsFav(true);
   dispatch(addFavorite({id, name, gender, onClose, species, image}));
}


}

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);


   return (


  <div className="letras">

{
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
   }
          <button className="Boton" onClick={()=> onClose(id)}>X</button>
         <Link to= {`/detail/${id}`}>
         <h2 className="letras2">{name}</h2>
         </Link>
         <h2 className="letras2">{species}</h2>
         <h2 className="letras2">{gender}</h2>
         <img className="imgcards" src={image} alt={name} />
      </div>
   );
}
