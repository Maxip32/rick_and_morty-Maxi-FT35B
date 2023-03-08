import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Detail.css";


const Detail= ()=>{
const {detailId} = useParams();
const [character, setCharacter]= useState();

useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);



return(

<div className="configdetalle">
  <button className="botonhome">
    <Link to="/home">Home</Link>
  </button>


<h1> {character?.name}</h1>
<p>  {character?.status}  </p>
<p> {character?.species} </p>
<p> {character?.gender}  </p>
<p> {character?.origin?.name} </p>
<img className="detail__image" src={character?.image} alt="" />
</div>


)


}

export default Detail;