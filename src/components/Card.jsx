import "./card.css"


export default function Card({name, gender, onClose, species, image}) {
   return (
      <div className="letras">
          <button className="Boton" onClick={onClose}>Cerrar</button>
         <h2 className="letras2">{name}</h2>
         <h2 className="letras2">{species}</h2>
         <h2 className="letras2">{gender}</h2>
         <img  src={image} alt={name} />
      </div>
   );
}
