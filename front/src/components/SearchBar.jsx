import { useState } from "react";
import "./Nav.css"
export default function SearchBar({onSearch}) {

   const [character, setCharacter]= useState("");

   const handleChange=(event)=>{

    setCharacter(event.target.value)
   }

   return (
      <div className="estilosearch">
     <input placeholder="..Busqueda" className="estiloinput" type='search' value={character} onChange={handleChange}/>
      <button className="Boton" onClick={()=>onSearch(character)}>Add News Cards</button>
      </div>
   );
}
