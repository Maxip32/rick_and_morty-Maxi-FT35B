import Card from './Card';
import "./card.css"
function Cards({characters, onClose}) {
   


  
   return (
   
   
   <div className='posicioncard'>
 {



characters.map(({id, name, species, gender, image})=>{

  
return <Card

key={characters.id}
id = {id}
name = {name}
species = {species}
gender = {gender}
image = {image}
onClose={onClose}
/>


})





 } 


</div>
   
   

)
}

export default Cards;
