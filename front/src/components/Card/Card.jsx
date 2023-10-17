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
         <br /><br />
         <button onClick={() => onClose(id)}>X</button>
 
         <h2>{name} | {id} </h2>
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
