import { Link } from 'react-router-dom';
//!----------------------------------------------------+/


export default function Card({
   onClose,
   name,
   status,
   species,
   gender,
   origin,
   image,
   id,
}) 

{
   return (
      <div>

         <button onClick={() => onClose(id)}>X</button>

         <Link to={`/detail/${id}`}> 
            <h2>{name}</h2> 
         </Link>
         
         <h4>STATUS | {status}</h4>
         <h4>SPECIES | {species}</h4>
         <h4>GENDER | {gender}</h4>
         <h4>ORIGIN | {origin}</h4>

         <Link to={`/detail/${id}`}>
            <img src={image} alt={name} />
         </Link>
         
      </div>
   );
}
