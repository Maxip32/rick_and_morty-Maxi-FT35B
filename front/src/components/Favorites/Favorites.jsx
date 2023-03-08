import { useSelector, useDispatch } from "react-redux";
import "./favorites.css"
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../../redux/actions";

const Favorites= ()=>{
    const {myFavorites}= useSelector(state=> state)
    const dispatch= useDispatch();
    const handlerOrder= (event)=>{
    dispatch(orderCards(event.target.value))

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

    
    myFavorites.map((character)=>{
    return(
        
            <div className="letras">
                 
        
         <Link to= {`/detail/${character.id}`}>
         <h2 className="letras2">{character.name}</h2>
         </Link>
         <h2 className="letras2">{character.species}</h2>
         <h2 className="letras2">{character.gender}</h2>
         <img className="imgcards" src={character.image} alt={character.name} />
      </div>
   
        )
    })
}
 </div>
    )

        
    
}
export default Favorites;