import { useSelector } from "react-redux";
import "./favorites.css"
import { Link } from "react-router-dom";


const Favorites= ()=>{
    const {myFavorites}= useSelector(state=> state)
    return(

  <div className="posicioncard">
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