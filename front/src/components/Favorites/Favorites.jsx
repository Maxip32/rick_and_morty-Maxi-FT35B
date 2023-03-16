import { useSelector, useDispatch } from "react-redux";
import "./favorites.css"
import { Link } from "react-router-dom";
import { orderCards, filterCards, deleteFavorite } from "../../redux/actions";
import trash from "../../assets/delete_blue.png"


const Favorites= ()=>{
  const {myFavorites}= useSelector(state=> state)
  const dispatch= useDispatch();
  const handlerOrder= (event)=>{
    dispatch(orderCards(event.target.value))
    
  }
  const onClose= (id)=>{
    dispatch(deleteFavorite(id))
  }

    const handlerFilter= (event)=>{
      dispatch(filterCards(event.target.value))
  
      }

     
    return(

  <div className="posicioncard">

    <div>
<select onChange={handlerOrder}>
  <option value="order" disabled="disabled" >Order By</option>
  <option value="Ascendente">Ascendente</option>
  <option value="Descendente">Descendente</option>
  </select>


<select onChange={handlerFilter}>
<option value="filter" disabled="disabled" >Filter By</option>
<option value="Male">Male</option>
<option value="Female">Female</option>
<option value="Genderless">Genderless</option>
<option value="unKnown">unKnown</option>
</select>

    </div>
{

    
    myFavorites.length > 0 && myFavorites.map((character)=>{
    return(
        <div className="contenedorfav">
            <div className="letras">
                 
        
                 <button className="BtnEliminar" onClick={()=> onClose(character.id)}><img src={trash} alt="Eliminar" width="35px" height="35px"/></button>
         <Link to= {`/detail/${character.id}`}>
         {/* <h2 className="letras2">{character.name}</h2> */}
         <img className="imgcards" src={character.image} alt={character.name} />
         </Link>
         {/* <h2 className="letras2">{character.species}</h2>
         <h2 className="letras2">{character.gender}</h2> */}
      </div>



        </div>
   
        )
    })
}
 </div>
 
    )

        
    
}
export default Favorites;