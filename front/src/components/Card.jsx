import "./card.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addFavorite, deleteFavorite } from "../redux/actions";
import { useEffect } from "react";
import trash from "../assets/delete_blue.png"
import corazonfav from "../assets/favorite.png"
import corazonunfav from "../assets/unfavorite.png"


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
   myFavorites.length > 0 && myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites, id]);


   return (


  <div className="contenedor">
<div className= "botnshead">


{

   isFav ? (
      <button className="Btnfavorite" onClick={handleFavorite}><img src={corazonfav} alt="favorit" width="35px" height="35px"/></button>
   ) : (
      <button  className="Btnfavorite"  onClick={handleFavorite}><img src={corazonunfav} alt="unfavorit" width="35px" height="35px"/></button>
   )
   }
          <button className="BtnEliminar" onClick={()=> onClose(id)}><img src={trash} alt="Eliminar" width="35px" height="35px"/></button>

</div>
          
         <Link to= {`/detail/${id}`}>
         <img className="imgcards" src={image} alt={name} />
         {/* <h2 className="letras2">{name}</h2> */}
         </Link>
         {/* <h2 className="letras2">{species}</h2>
         <h2 className="letras2">{gender}</h2> */}
         <div>
         {/* <img className="imgcards" src={image} alt={name} /> */}
        </div>
      </div>
   );
}
